import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<ProductDetailComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   public api:ApiService
  ) { }

  ngOnInit(): void {
  }
  loading:boolean | undefined;
  saveData()
  {
    //jika id tidak terdefinisi maka buat data
   if(this.data.id == undefined)
   {
     //prosedur pengiriman data ke server menggunakan metode POST
     this.api.post('products',this.data).subscribe(result=>{
       //tutup dialog dan kirimkan feedback server ke fungsi pemanggil dialog
       this.dialogRef.close(result);
       this.loading=false;
     },error=>{
       //kondisi jika terjadi masalah pengiriman pada pengiriman data
       alert(error);
       this.loading=false;
     })
   }else{
     //prosedur edit data menggunakan metode PUT     
     this.api.post('products/'+this.data.id,this.data).subscribe(result=>{
       //tutup dialog dan kirimkan feedback server ke fungsi pemanggil dialog
       this.loading=false;
       this.dialogRef.close(result);
     },error=>{
       //kondisi jika terjadi masalah pengiriman pada pengiriman data
       alert(error);
       this.loading=false;
    });
  }
}
}
