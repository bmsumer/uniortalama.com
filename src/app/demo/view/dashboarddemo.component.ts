import {Component, OnInit} from '@angular/core';
import {EventService} from '../service/eventservice';
import {SelectItem, PrimeIcons} from 'primeng/api';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./tabledemo.scss']
})
export class DashboardDemoComponent implements OnInit {

    visitorChart: any;

    visitorChartOptions: any;

    timelineEvents: any[];

    countryChart: any;

    countryChartOptions: any;

    revenueChart: any;

    revenueChartOptions: any;




    cities: SelectItem[];

    products: Product[];

    chartData: any;

    events: any[];

    selectedCity: any;

    fullcalendarOptions: any;

    constructor(private productService: ProductService, private eventService: EventService,
                private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Dashboard'},
            {label: 'Sales Dashboard', routerLink: ['/']},
        ]);
    }

    ngOnInit() {
        this.visitorChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Plan',
                    data: [630, 630, 695, 695, 695, 760, 760, 760, 840, 840, 840, 840],
                    borderColor: [
                        '#FC6161',
                    ],
                    steppedLine: true,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    type: 'line',
                    fill: false
                },
                {
                    label: 'Groth actual',
                    data: [600, 671, 660, 665, 700, 610, 810, 790, 710, 860, 810, 780],
                    backgroundColor: getComputedStyle(document.body).getPropertyValue('--primary-color') ,
                    fill: true
                }
            ]
        };

        this.visitorChartOptions = {
            legend: {
                position: 'top',
                align: 'end'
            },
            responsive: true,
            hover: {
                mode: 'index'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 500,
                        max: 900
                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    barPercentage: 0.5,
                    gridLines: {
                        display: false
                    }
                }]
            }
        };

        this.timelineEvents = [
            {transaction: 'Payment from #28492', amount: '+$250.00', date: 'June 13, 2020 11:09 AM',
                icon: PrimeIcons.CHECK, iconColor: '#0F8BFD', amountColor: '#00D0DE'},
            {transaction: 'Process refund to #94830', amount: '-$570.00', date: 'June 13, 2020 08:22 AM',
                icon: PrimeIcons.REFRESH, iconColor: '#FC6161', amountColor: '#FC6161'},
            {transaction: 'New 8 user to #5849', amount: '+$50.00', date: 'June 12, 2020 02:56 PM',
                icon: PrimeIcons.PLUS, iconColor: '#0BD18A', amountColor: '#0BD18A'},
            {transaction: 'Payment from #3382', amount: '+$3830.00', date: 'June 11, 2020 06:11 AM',
                icon: PrimeIcons.CHECK, iconColor: '#0F8BFD', amountColor: '#00D0DE'},
            {transaction: 'Payment from #4738', amount: '+$845.00', date: 'June 11, 2020 03:50 AM',
                icon: PrimeIcons.CHECK, iconColor: '#0F8BFD', amountColor: '#00D0DE'},
            {transaction: 'Payment failed form #60958', amount: '$1450.00', date: 'June 10, 2020 07:54 PM',
                icon: PrimeIcons.EXCLAMATION_TRIANGLE, iconColor: '#EC4DBC', amountColor: '#EC4DBC'},
            {transaction: 'Payment from #5748', amount: '+$50.00', date: 'June 09, 2020 11:37 PM',
                icon: PrimeIcons.CHECK, iconColor: '#0F8BFD', amountColor: '#00D0DE'},
            {transaction: 'Removed 32 users from #5849', amount: '-$240.00', date: 'June 09, 2020 08:40 PM',
                icon: PrimeIcons.MINUS, iconColor: '#FC6161', amountColor: '#FC6161'},
        ];

        this.countryChart = {
            labels: ['RUS', 'Other', 'IND', 'AUS', 'JPN', 'USA', 'CHN'],
            datasets: [
                {
                    data: [30, 18, 36, 54, 61, 90, 72],
                    backgroundColor: [
                        '#0F8BFD',
                        '#545C6B',
                        '#EC4DBC',
                        '#EEE500',
                        '#FC6161',
                        '#00D0DE',
                        '#873EFE',
                    ],
                    hoverBackgroundColor: [
                        '#0F8BFD',
                        '#545C6B',
                        '#EC4DBC',
                        '#EEE500',
                        '#FC6161',
                        '#00D0DE',
                        '#873EFE',
                    ],
                    borderColor: 'transparent',
                    fill: true
                }
            ]
        };

        this.countryChartOptions = {};

        this.revenueChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Sales',
                    data: [37, 34, 21, 27, 10, 18, 15],
                    borderColor: '#EEE500',
                    pointBackgroundColor: '#EEE500',
                    backgroundColor: 'rgba(238, 229, 0, 0.05)',
                    fill: true
                },
                {
                    label: 'Revenue',
                    data: [31, 27, 30, 37, 23, 29, 20],
                    borderColor: '#00D0DE',
                    pointBackgroundColor: '#00D0DE',
                    backgroundColor: 'rgba(0, 208, 222, 0.05)',
                    fill: true,
                },
                {
                    label: 'Expenses',
                    data: [21, 7, 13, 3, 19, 11, 6],
                    borderColor: '#FC6161',
                    pointBackgroundColor: '#FC6161',
                    backgroundColor: 'rgba(253, 72, 74, 0.05)',
                    fill: true
                },
                {
                    label: 'Customer',
                    data: [47, 31, 35, 20, 46, 39, 25],
                    borderColor: '#0F8BFD',
                    pointBackgroundColor: '#0F8BFD',
                    backgroundColor: 'rgba(15, 139, 253, 0.05)',
                    fill: true
                }]
        };

        this.revenueChartOptions = {
            responsive: true,
            hover: {
                mode: 'index'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 60,
                        stepSize: 5
                    }
                }]
            }
        };






        this.productService.getProducts().then(data => this.products = data);
        this.eventService.getEvents().then(events => {
            this.events = events;
        });

        this.cities = [];
        this.cities.push({label: 'Select City', value: null});
        this.cities.push({label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}});
        this.cities.push({label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}});
        this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
        this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
        this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#FFC107'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#03A9F4'
                }
            ]
        };

        this.fullcalendarOptions = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: '2017-02-12',
            header: {
                right: 'prev,next,today',
                left: 'title'
            }
        };
    }
}
