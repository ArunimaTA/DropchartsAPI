import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { BarChartComponent } from 'src/app/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/charts/pie-chart/pie-chart.component';
import { RadarChartComponent } from 'src/app/charts/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from 'src/app/charts/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from 'src/app/charts/line-chart/line-chart.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    DefaultComponent,
    BarChartComponent,
    PieChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [WeatherService]
})
export class DefaultModule { }
