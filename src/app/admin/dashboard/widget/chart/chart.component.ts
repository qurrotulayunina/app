import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {}

  constructor() { }
  
  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: 'Performa Toko'
    },

    subtitle: {
        text: 'ManageLy'
    },

    yAxis: {
        title: {
            text: 'Jumlah Pembeli'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2014 to '
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2014
        }
    },

    series: [{
        name: 'Penjualan',
        data: [43934, 73060, 43200, 52503, 57177, 69658, 97031, 119931]
    }, {
        name: 'Dibatalkan',
        data: [29742, 29851, 32490, 30282, 38121, 40434, 54300, 32000]
    }, {
        name: 'Pengembalian',
        data: [16005, 19771, 20000, 19800, 20185, 24377, 32147, 39387]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
    }
  }
}
    


