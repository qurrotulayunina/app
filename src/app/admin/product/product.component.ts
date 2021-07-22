import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  title:any;
  product:any={};
  products:any=[];
  userData:any = {};

  constructor(
    public dialog:MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.title='Produk';
    this.auth.user.subscribe(user=>{
      this.userData = user;
      console.log(this.userData);
      this.getProducts();
    })
  }
  loading:boolean | undefined;
  getProducts()
  {
    this.loading=true;
    this.db.collection('products', ref=>{
      return ref.where('uid','==',this.userData.uid);
    }).valueChanges({idField : 'id'}).subscribe(res=>{
      console.log(res);
      this.products=res;
      this.loading=false;
    }, err=>{
      this.loading=false;
    })
  }

  productDetail(data:any,idx:any)
  {
   let dialog=this.dialog.open(ProductDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     return;
   })
  }

  loadingDelete:any={};
  deleteProduct(id: any,idx: any)
  {
    var conf=confirm('Delete item?');
    if(conf)
    {
      this.db.collection('products').doc(id).delete().then(result=>{
        this.products.splice(idx,1);
        this.loadingDelete[idx]=false;
      }).catch(error=>{
        this.loadingDelete[idx]=false;
        alert('Tidak dapat menghapus data');
      });
    }
  }

}