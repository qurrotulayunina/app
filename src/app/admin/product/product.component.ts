import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  product:any={};
  products:any=[];

  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) {
    this.title='Produk';
    this.getProducts();
   }

  ngOnInit(): void {
  }
  loading:boolean | undefined;
  getProducts()
  {
    this.api.get('products').subscribe(result=>{
      this.products=result;
    })
    //this.products=[
      //{
       //nama:'Gamis',
        //ukuran:'XL',
        //warna:'all available',
        //stok:20,
       // harga:100000
     // },
     // {
        //nama:'Mukena',
       // ukuran:'XL',
        //warna:'all available',
        //stok:20,
        //harga:150000
      //}
    //];
  }
  productDetail(data:any,idx:any)
  {
   let dialog=this.dialog.open(ProductDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
       if(idx==-1)this.products.push(res);      
       else this.products[idx]=res; 
     }
   })
  }

  loadingDelete:any={};
 deleteProduct(idx:any)
  {
   var conf=confirm('Delete item?');
   if(conf)
   {
    this.api.delete('products/'+this.products[idx].id).subscribe(result=>{
      this.products.splice(idx,1);
    },error=>{
      alert('Tidak dapat menghapus data');
    });
  }

}}
