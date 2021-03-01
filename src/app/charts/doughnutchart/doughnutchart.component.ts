import { Component, Input ,OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.css']
})
export class DoughnutchartComponent implements OnInit {

  @Input() public doughnutChartLabels: Label[] = [];
  @Input() public doughnutChartData: SingleDataSet[] = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
          fontColor: 'black',
          fontSize: 10
      }
    },
    tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {

            let legend = data.labels[tooltipItem.index];
            let value = data.datasets[tooltipItem.datasetIndex]
              .data[tooltipItem.index].toLocaleString('pt-BR');

            var label = `${legend}: ${value}`;

            return label;
          }
      }
  },
    plugins: {
      datalabels: {
        borderColor: 'white',
        borderRadius: 25,
        borderWidth: 2,
        color: 'black',
        font: function(context) {
          var width = context.chart.width;
          var size = Math.round(width / 25);
          return {
              weight: 'bold',
              size: size
          };
      },
        padding: 6,
        formatter: function(value) {
          return value.toLocaleString('pt-BR');
      }
      }
    },
  }

   doughnutChartColors: any[] = [
     { backgroundColor: ["#FFA0B6", "#8CC7F3", "#a4c73c", "#a4add3"] }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
