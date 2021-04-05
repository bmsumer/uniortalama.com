import {Component, OnInit} from '@angular/core';
import {EventService} from '../service/eventservice';
import {SelectItem, PrimeIcons} from 'primeng/api';
import {Customer} from '../domain/customer';
import {CustomerService} from '../service/customerservice';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';

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

    customers1: Customer[];

    selectedCustomers1: Customer[];

    customerChart: any;

    customerChartOptions: any;

    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    customer: any[];

    constructor(private customerService: CustomerService, private eventService: EventService,
                private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Dashboard'},
            {label: 'Sales Dashboard', routerLink: ['/']},
        ]);
    }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => {
            this.customers1 = customers;
            // @ts-ignore
            this.customers1.forEach(customer => customer.date = new Date(customer.date));
        });

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

        this.customerChart = {
            labels: ['January', 'March', 'May', 'Agust', 'October', 'December'],
            datasets: [
                {
                    data: [10, 25, 48, 35, 54, 70],
                    backgroundColor: '#AAABDD',
                    hoverBackgroundColor: '#AAABDD',
                    fill: true
                },
                {
                    data: [18, 35, 23, 30, 59, 65],
                    backgroundColor: '#A0A0D9',
                    hoverBackgroundColor: '#A0A0D9',
                    fill: true
                },
                {
                    data: [20, 47, 46, 46, 61, 70],
                    backgroundColor: '#ACADDE',
                    hoverBackgroundColor: '#ACADDE',
                    fill: true
                },
                {
                    data: [17, 34, 18, 48, 67, 68],
                    backgroundColor: '#ABABDD',
                    hoverBackgroundColor: '#ABABDD',
                    fill: true
                },
                {
                    data: [9, 37, 47, 50, 60, 62],
                    backgroundColor: '#A2A3D9',
                    hoverBackgroundColor: '#A2A3D9',
                    fill: true
                },
                {
                    data: [8, 48, 40, 52, 72, 75],
                    backgroundColor: '#A3A4DA',
                    hoverBackgroundColor: '#A3A4DA',
                    fill: true
                },
                {
                    data: [10, 18, 50, 47, 63, 80],
                    backgroundColor: '#A2A3D9',
                    hoverBackgroundColor: '#A2A3D9',
                    fill: true
                },
                {
                    data: [20, 36, 39, 58, 59, 85],
                    backgroundColor: '#8485CD',
                    hoverBackgroundColor: '#8485CD',
                    fill: true
                },
                {
                    data: [30, 45, 35, 50, 54, 81],
                    backgroundColor: '#7D7ECA',
                    hoverBackgroundColor: '#7D7ECA',
                    fill: true
                },
                {
                    data: [28, 35, 52, 56, 60, 77],
                    backgroundColor: '#8384CD',
                    hoverBackgroundColor: '#8384CD',
                    fill: true
                },
                {
                    data: [40, 40, 38, 45, 68, 86],
                    backgroundColor: '#8F90D2',
                    hoverBackgroundColor: '#8F90D2',
                    fill: true
                },
                {
                    data: [50, 23, 27, 34, 65, 90],
                    backgroundColor: '#8C8DD0',
                    hoverBackgroundColor: '#8C8DD0',
                    fill: true
                },
                {
                    data: [29, 27, 29, 42, 55, 84],
                    backgroundColor: '#9495D4',
                    hoverBackgroundColor: '#9495D4',
                    fill: true
                },
                {
                    data: [10, 37, 47, 29, 59, 80],
                    backgroundColor: '#9696D4',
                    hoverBackgroundColor: '#9696D4',
                    fill: true
                },
                {
                    data: [10, 54, 42, 38, 63, 83],
                    backgroundColor: '#7273C6',
                    hoverBackgroundColor: '#7273C6',
                    fill: true
                },
                {
                    data: [25, 44, 50, 56, 65, 92],
                    backgroundColor: '#5F60BE',
                    hoverBackgroundColor: '#5F60BE',
                    fill: true
                },
                {
                    data: [30, 43, 48, 45, 73, 78],
                    backgroundColor: '#5C5DBD',
                    hoverBackgroundColor: '#5C5DBD',
                    fill: true
                },
                {
                    data: [29, 47, 54, 60, 77, 86],
                    backgroundColor: '#5C5DBD',
                    hoverBackgroundColor: '#5C5DBD',
                    fill: true
                }
            ]
        };

        this.customerChartOptions = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false,
                }],
                xAxes: [{
                    gridLines : {
                        display : false
                    },
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                }]
            },
        };

        this.customer = [
            {user: '9,673 Users', value: '$8,362,478', image: 'nasa'},
            {user: '9,395 Users', value: '$7,927,105', image: 'beats'},
            {user: '7,813 Users', value: '$6,471,594', image: 'go-pro'},
            {user: '7,613 Users', value: '$5,697,883', image: 'north-face'},
            {user: '98,673 Users', value: '$7,653,311', image: 'mc'},
            {user: '5,645 Users', value: '$4,567,823', image: 'dell'},
            {user: '5,153 Users', value: '$5,342,678', image: 'wwf'},
            {user: '4,338 Users', value: '$5,867,391', image: 'bmw'},
            {user: '4,170 Users', value: '$4,647,233', image: 'pepsi'},
            {user: '3,765 Users', value: '$4,123,876', image: 'huawei'},
            {user: '3,490 Users', value: '$3,688,362', image: 'dyson'},
            {user: '2,976 Users', value: '$3,978,478', image: 'p&g'},
        ];
    }
}
