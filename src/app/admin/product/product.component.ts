import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  product:any={};
  //membuat koleksi produk
  products:any=[];
  constructor(

  ) {
    this.title='Produk';
    //memanggil fungsi getProducts()
    this.getProducts();
   }

  ngOnInit(): void {
  }
  //membuat fungsi
  getProducts()
  {
    this.products=[
      {
        nama:'Gamis',
        ukuran:'XL',
        warna:'all available',
        stok:20,
        harga:100000
      },
      {
        nama:'Mukena',
        ukuran:'XL',
        warna:'all available',
        stok:20,
        harga:150000
      }
    ];
  }

}
