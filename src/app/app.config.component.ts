import {Component, OnInit} from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
            <i class="pi pi-cog"></i>
        </a>
        <div class="layout-config" [ngClass]="{'layout-config-active': app.configActive}" (click)="app.onConfigClick($event)">
            <h5>Menu Type</h5>
            <div class="p-field-radiobutton">
                <p-radioButton name="layoutMode" value="static" [(ngModel)]="app.layoutMode" inputId="layoutMode1"></p-radioButton>
                <label for="layoutMode1">Static</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="layoutMode" value="overlay" [(ngModel)]="app.layoutMode" inputId="layoutMode2"></p-radioButton>
                <label for="layoutMode2">Overlay</label>
            </div>

            <h5>Menu Color</h5>
            <div class="p-field-radiobutton">
                <p-radioButton name="darkMenu" [value]="false" [(ngModel)]="app.darkMenu" inputId="darkMenu1"></p-radioButton>
                <label for="darkMenu1">Light</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="darkMenu" [value]="true" [(ngModel)]="app.darkMenu" inputId="darkMenu2"></p-radioButton>
                <label for="darkMenu2">Dark</label>
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
			<p-inputSwitch [ngModel]="app.ripple" (onChange)="app.onRippleChange($event)"></p-inputSwitch>

            <h5>Layouts</h5>
            <div class="layout-themes">
                <div *ngFor="let l of layoutColors">
                    <a style="cursor: pointer" (click)="changeLayout(l.name)" [ngStyle]="{'background-color': l.color}">
                        <i *ngIf="layout === l.name" class="pi pi-check"></i>
                    </a>
                </div>
            </div>

            <h5>Themes</h5>
            <div class="layout-themes">
                <div *ngFor="let t of themeColors">
                    <a style="cursor: pointer" (click)="changeTheme(t.name)" [ngStyle]="{'background-color': t.color}">
                        <i *ngIf="theme === t.name" class="pi pi-check"></i>
                    </a>
                </div>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    layoutColors: any[];

    themeColors: any[];

    layout = 'steel';

    theme = 'steel';

    constructor(public app: AppMainComponent) {}

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

    changeTheme(theme) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const href = 'assets/theme/theme-' + theme + '.css';

        this.replaceLink(themeLink, href);
    }

    changeLayout(layout) {
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        const href = 'assets/layout/css/layout-' + layout + '.css';

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
        this.app.configActive = !this.app.configActive;
        this.app.configClick = true;
        event.preventDefault();
    }
}
