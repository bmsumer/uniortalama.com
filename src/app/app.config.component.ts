import {Component, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
            <i class="pi pi-cog"></i>
        </a>
        <div class="layout-config" [ngClass]="{'layout-config-active': appMain.configActive}" (click)="appMain.onConfigClick($event)">
            <h5>Menu Type</h5>
            <div class="p-field-radiobutton">
                <p-radioButton name="layoutMode" value="static" [(ngModel)]="app.menuMode" inputId="layoutMode1"></p-radioButton>
                <label for="layoutMode1">Static</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="layoutMode" value="overlay" [(ngModel)]="app.menuMode" inputId="layoutMode2"></p-radioButton>
                <label for="layoutMode2">Overlay</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="layoutMode" value="slim" [(ngModel)]="app.menuMode" inputId="layoutMode3"></p-radioButton>
                <label for="layoutMode3">Slim</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="layoutMode" value="horizontal" [(ngModel)]="app.menuMode" inputId="layoutMode4"></p-radioButton>
                <label for="layoutMode4">Horizontal</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="layoutMode" value="sidebar" [(ngModel)]="app.menuMode" inputId="layoutMode5"></p-radioButton>
                <label for="layoutMode5">Sidebar</label>
            </div>

            <h5>Color Scheme</h5>
            <div class="p-field-radiobutton">
                <p-radioButton name="darkMode" value="light" [(ngModel)]="app.colorScheme" inputId="darkMode1"
                               (onClick)="changeColorScheme('light')"></p-radioButton>
                <label for="darkMode1">Light</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="darkMode" value="dark" [(ngModel)]="app.colorScheme" inputId="darkMode2"
                               (onClick)="changeColorScheme('dark')"></p-radioButton>
                <label for="darkMode2">Dark</label>
            </div>

            <h5>Input Style</h5>
            <div class="p-field-radiobutton">
                <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                <label for="inputStyle1">Outlined</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                <label for="inputStyle2">Filled</label>
            </div>

            <h5>Ripple Effect</h5>
			<p-inputSwitch [ngModel]="app.ripple" (onChange)="appMain.onRippleChange($event)"></p-inputSwitch>

            <h5>Layouts</h5>
            <div class="layout-themes">
                <div *ngFor="let l of layoutColors">
                    <a style="cursor: pointer" (click)="changeLayout(l.name)" [ngStyle]="{'background-color': l.color}">
                        <i *ngIf="app.layout === l.name" class="pi pi-check"></i>
                    </a>
                </div>
            </div>

            <h5>Themes</h5>
            <div class="layout-themes">
                <div *ngFor="let t of themeColors">
                    <a style="cursor: pointer" (click)="changeTheme(t.name)" [ngStyle]="{'background-color': t.color}">
                        <i *ngIf="app.theme === t.name" class="pi pi-check"></i>
                    </a>
                </div>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    layoutColors: any[];

    themeColors: any[];

    constructor(public appMain: AppMainComponent, public app: AppComponent) {}

    ngOnInit() {
        this.themeColors = [
            {name: 'blue', color: '#3192e1'},
            {name: 'cyan', color: '#5e91a9'},
            {name: 'green', color: '#5ea980'},
            {name: 'orange', color: '#ff9c59'},
            {name: 'pink', color: '#e42a7b'},
            {name: 'purple', color: '#985edb'},
            {name: 'steel', color: '#58799f'},
            {name: 'turquoise', color: '#47c5d4'}
        ];

        this.layoutColors = [
            {name: 'blue', color: '#3192e1'},
            {name: 'cyan', color: '#5e91a9'},
            {name: 'dark', color: '#545b61'},
            {name: 'green', color: '#5ea980'},
            {name: 'orange', color: '#ff9c59'},
            {name: 'pink', color: '#e42a7b'},
            {name: 'purple', color: '#985edb'},
            {name: 'steel', color: '#58799f'},
            {name: 'turquoise', color: '#47c5d4'}
        ];
    }

    changeColorScheme(scheme) {
        this.changeStyleSheetsColor('layout-css', 'layout-' + scheme + '.css', 1);
        this.changeStyleSheetsColor('theme-css', 'theme-' + scheme + '.css', 1);

        this.app.colorScheme = scheme;
    }

    changeStyleSheetsColor(id, value, from) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');

        if (from === 1) {           // which function invoked this function - change scheme
            urlTokens[urlTokens.length - 1] = value;
        } else if (from === 2) {       // which function invoked this function - change color
            urlTokens[urlTokens.length - 2] = value;
        }

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    changeTheme(theme) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const href = 'assets/theme/theme-' + theme + '.css';
        this.app.theme = theme;

        this.replaceLink(themeLink, href);
    }

    changeLayout(layout) {
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        const href = 'assets/layout/css/layout-' + layout + '.css';
        this.app.layout = layout;

        this.replaceLink(layoutLink, href);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    onConfigButtonClick(event) {
        this.appMain.configActive = !this.appMain.configActive;
        this.appMain.configClick = true;
        event.preventDefault();
    }
}
