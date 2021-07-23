import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  title:any; 
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.title='Pesan'
  }

}
