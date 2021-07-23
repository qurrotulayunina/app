import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  title : any; 

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.title = 'Grafik'
  }

}
