import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,

        pointBackgroundColor: '#c69',
        tension: 0.5,
        borderColor: 'rgba(255,0,0,0.3)',
        backgroundColor: 'transparent',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      x: {
        grid: {
          lineWidth: 0,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          borderDash: [5, 5],
          borderDashOffset: 2,
          color: function (context) {
            if (context.tick.value === 0) {
              return 'rgba(0, 0, 0, 0)';
            }
            return 'rgba(0, 0, 0, 0.1)';
          },
        },
      },

      // And this will affect the horizontal lines (yAxe) of your dataset
    },
  };
  public lineChartLegend = true;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
