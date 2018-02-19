import { Component, OnInit, Input, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { GobletsStock } from '../../models/GobletsStock';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
    @Input()
    dataset: Array<GobletsStock> = [];

    @Input()
    label: String;
    
    @Input()
    nextShortage: Date;

    @Input()
    changeOnLow: boolean;

    @ViewChild("canvas")
    canvas: ElementRef;

    chart = [];
    xValues: String[];
    yValues: number[];
    maxValue: number = 0;

    constructor() {
    }

    ngOnInit() {
        let self = this;

        this.xValues = this.dataset.map(el => this.formatXValue(new Date(el.createdAt.toString())));
        this.yValues = this.dataset.map(el => {
            self.maxValue = Math.max(el.value, self.maxValue);

            return el.value;
        });

        console.log(this.label, this.yValues);
        this.setupGraph();
    }

    formatXValue(date: Date): String {
        let MM = date.getMonth() + 1; // getMonth() is zero-based
        let dd = date.getDate();
        let hh = date.getHours();
        let mm = date.getMinutes();

        let resultDate = [
            (dd>9 ? '' : '0') + dd,
            (MM>9 ? '' : '0') + MM,
            date.getFullYear()
        ].join('/');

        let resultTime = [
            (hh>9 ? '' : '0') + hh,
            (mm>9 ? '' : '0') + mm
        ].join(":");

        return resultDate + " " + resultTime;
    }

    ngOnChanges(changes: SimpleChanges) {
        let reset = false;

        for ( let i in changes ) {
            if ( !changes[i].firstChange ) {
                reset = true;
            }
        }

        if ( reset ) {
            this.setupGraph();
        }
    }

    setupGraph() {
        let context = this.canvas.nativeElement.getContext('2d');
        console.log(context);

        this.chart = new Chart(context, {
            type: 'line',
            data: {
                labels: this.xValues,
                datasets: [
                    {
                        data: this.yValues,
                        borderColor: "#3cba9f",
                        fill: false
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: { }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: this.maxValue + 2
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }
        });
    }

}
