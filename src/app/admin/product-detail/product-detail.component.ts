import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  userData: any = {};
  constructor(
    public dialogRef:MatDialogRef<ProductDetailComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   public api:ApiService,
   public db: AngularFirestore,
   public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe(res=>{
      this.userData = res;
    });
  }
  loading:boolean | undefined;
  saveData()
  {
   this.loading=true;
   if(this.data.id == undefined)
   {
     let doc = new Date().getTime().toString();
     this.data.uid = this.userData.uid;
     this.db.collection('products').doc(doc).set(this.data).then(res=>{
      this.dialogRef.close(this.data);
      this.loading=false;
  }).catch(er=>{
    console.log(er);
    this.loading=false;
    alert('Tidak dapat menyimpan data');
  })
  }else {
    this.db.collection('products').doc(this.data.id).update(this.data).then(res=>{
     this.dialogRef.close(this.data);
     this.loading=false;
 }).catch((er: any)=>{
    console.log(er); 
    this.loading=false;
    alert('Tidak dapat menyimpan data'); 
 }) 
}
}
}