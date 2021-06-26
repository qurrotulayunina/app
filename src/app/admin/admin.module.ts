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
