import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  title : any;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.title='Transaksi'
  }

}
