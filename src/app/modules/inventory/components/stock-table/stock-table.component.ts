import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent {
  chart: any;
	
  chartOptions = {
    title:{
      text: "Total Impressions by Platforms"
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      suffix: "K"
    },
    data: [{
      type: "bar",
      indexLabel: "{y}",
      yValueFormatString: "#,###K",
      dataPoints: [
        { label: "Electronics", y: 15 },
        { label: "Home Goods", y: 20 },
        { label: "Books", y: 24 },
        { label: "Toys", y: 29 },
        { label: "Apparel", y: 73 }
      ]
    }]
  }	
}