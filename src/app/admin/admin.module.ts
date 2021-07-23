import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './dashboard/widget/card/card.component';
import { AreaComponent } from './dashboard/widget/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './dashboard/widget/chart/chart.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MessageComponent } from './message/message.component';
import { ReviewComponent } from './review/review.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'transaction',
        component:TransactionComponent
      },
      {
        path:'message',
        component:MessageComponent
      },
      {
        path:'review',
        component:ReviewComponent
      },
      {
        path:'graph',
        component:GraphComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductComponent,
    ProductDetailComponent,
    CardComponent,
    AreaComponent,
    ChartComponent,
    TransactionComponent,
    MessageComponent,
    ReviewComponent,
    GraphComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule,
    FlexLayoutModule,
    HighchartsChartModule
  ],
  exports:[
    CardComponent,
    AreaComponent,
    ChartComponent
  ]
})
export class AdminModule { }
