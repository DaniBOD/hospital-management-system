import { DOCUMENT, NgStyle } from '@angular/common';
import { Component, DestroyRef, effect, inject, OnInit, Renderer2, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import {
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,
  TextColorDirective
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';

import { WidgetsBrandComponent } from '../widgets/widgets-brand/widgets-brand.component';
import { WidgetsDropdownComponent } from '../widgets/widgets-dropdown/widgets-dropdown.component';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

interface IUser {
  id: string;
  name: string;
  state: string;
  registered: string;
  usage: number;
  period: string;
  buttonLabel: string;
  avatar: string;
  status: string;
  
}

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
    imports: [TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ProgressBarDirective, ProgressComponent, CardHeaderComponent, TableDirective, AvatarComponent]
})

export class DashboardComponent implements OnInit {

  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #document: Document = inject(DOCUMENT);
  readonly #renderer: Renderer2 = inject(Renderer2);
  readonly #chartsData: DashboardChartsData = inject(DashboardChartsData);

  public users: IUser[] = [
    {
      id: '1',
      name: 'Rafaela Fuentes',
      state: 'ING',
      registered: 'NRC:5493',
      usage: 50,
      period: 'Primer semestre 2025',
      avatar: './assets/images/avatars/1.jpg',
      status: 'success',
      buttonLabel: 'Responder'
    },
    {
      id: '2',
      name: 'Tomás Acevedo',
      state: 'ICIF ',
      registered: 'NRC:6589',
      usage: 10,
      period: 'Primer semestre 2025',
      avatar: './assets/images/avatars/2.jpg',
      status: 'danger',
      buttonLabel: 'Responder'
    },
    {
      id: '3',
      name: 'Gustavo Mondaca',
      state: 'ING',
      registered: 'NRC:5465',
      usage: 74,
      period: 'Primer semestre 2025',
      avatar: './assets/images/avatars/3.jpg',
      status: 'warning',
      buttonLabel: 'Responder'
    },
    {
      id: '4',
      name: 'Fabiola Alvarado',
      state: 'ICIF',
      registered: 'NRC:6578',
      usage: 98,
      period: 'Primer semestre 2025',
      avatar: './assets/images/avatars/4.jpg',
      status: 'secondary',
      buttonLabel: 'Responder'
    },
    {
      id: '5',
      name: 'Agatha Ruiz',
      state: 'ING',
      registered: 'NRC:5466',
      usage: 22,
      period: 'Primer semestre 2025',
      avatar: './assets/images/avatars/5.jpg',
      status: 'success',
      buttonLabel: 'Responder'
    },
    {
      id: '6',
      name: 'Dávid Bisbal',
      state: 'ICIF',
      registered: 'NRC:6514',
      usage: 43,
      period: 'Primer semestre 2025',
      avatar: './assets/images/avatars/6.jpg',
      status: 'info',
      buttonLabel: 'Responder'
    }
  ];

  public mainChart: IChartProps = { type: 'line' };
  public mainChartRef: WritableSignal<any> = signal(undefined);
  #mainChartRefEffect = effect(() => {
    if (this.mainChartRef()) {
      this.setChartStyles();
    }
  });
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new FormGroup({
    trafficRadio: new FormControl('Month')
  });

  constructor(private router: Router) {
    // ...otros injects si tienes...
  }

  abrirEncuesta() {
  this.router.navigate(['dashboard', 'encuesta']);
}

verHistorica(user: any) {
  this.router.navigate(['dashboard', 'historica'], { queryParams: { profesorId: user.id } });
}

  ngOnInit(): void {
    this.initCharts();
    this.updateChartOnColorModeChange();
  }

  initCharts(): void {
    this.mainChart = this.#chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.#chartsData.initMainChart(value);
    this.initCharts();
  }

  handleChartRef($chartRef: any) {
    if ($chartRef) {
      this.mainChartRef.set($chartRef);
    }
  }

  updateChartOnColorModeChange() {
    const unListen = this.#renderer.listen(this.#document.documentElement, 'ColorSchemeChange', () => {
      this.setChartStyles();
    });

    this.#destroyRef.onDestroy(() => {
      unListen();
    });
  }

  setChartStyles() {
    if (this.mainChartRef()) {
      setTimeout(() => {
        const options: ChartOptions = { ...this.mainChart.options };
        const scales = this.#chartsData.getScales();
        this.mainChartRef().options.scales = { ...options.scales, ...scales };
        this.mainChartRef().update();
      });
    }
  }
}
