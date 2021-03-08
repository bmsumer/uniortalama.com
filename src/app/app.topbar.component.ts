import {Component} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="layout-topbar">
            <div class="layout-topbar-left">
                <a href="#" class="topbar-menu-button" (click)="app.onMenuButtonClick($event)" *ngIf="app.isOverlay() || app.isMobile()">
                    <i class="pi pi-bars"></i>
                </a>

                <a href="#" class="logo">
                    <img src="assets/layout/images/logo-black.png">
                </a>

                <a href="#">
                    <img src="assets/layout/images/appname-black.png" class="app-name"/>
                </a>
            </div>

            <app-menu></app-menu>

            <div class="layout-topbar-right">
                <ul class="layout-topbar-right-items">
                    <li #profile class="profile-item" [ngClass]="{'active-topmenuitem':app.activeTopbarItem === profile}">
                        <a href="#" (click)="app.onTopbarItemClick($event,profile)">
                            <img src="assets/layout/images/profile-image.png">
                        </a>

                        <ul class="fadeInDown">
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="pi pi-fw pi-user"></i>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="pi pi-fw pi-cog"></i>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="pi pi-fw pi-sign-out"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="topbar-icon pi pi-fw pi-bell"></i>
                            <span class="topbar-badge">2</span>
                            <span class="topbar-item-name">Notifications</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="topbar-icon pi pi-fw pi-comment"></i>
                            <span class="topbar-badge">5</span>
                            <span class="topbar-item-name">Messages</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class AppTopbarComponent {

    constructor(public app: AppMainComponent) {}

}
