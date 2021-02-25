import {Component} from '@angular/core';
import {MenuService} from './app.menu.service';
import {PrimeNGConfig} from 'primeng/api';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-main',
    templateUrl: './app.main.component.html'
})
export class AppMainComponent {
    overlayMenuActive: boolean;

    staticMenuDesktopInactive: boolean;

    staticMenuMobileActive: boolean;

    sidebarActive = false;

    menuClick: boolean;

    menuHoverActive = false;

    topbarMenuActive: boolean;

    topbarItemClick: boolean;

    activeTopbarItem: any;

    configActive: boolean;

    configClick: boolean;

    constructor(private menuService: MenuService, private primengConfig: PrimeNGConfig, public app: AppComponent) {
    }

    onLayoutClick() {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        if (this.configActive && !this.configClick) {
            this.configActive = false;
        }

        if (!this.menuClick) {
            if (this.isSlim() || this.isHorizontal()) {
                this.menuService.reset();
            }

            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.overlayMenuActive = false;
                this.staticMenuMobileActive = false;
            }

            this.menuHoverActive = false;
        }

        this.configClick = false;
        this.menuClick = false;
        this.topbarItemClick = false;
    }

    onSidebarClick($event) {
        this.menuClick = true;
    }

    onToggleMenu(event) {
        this.menuClick = true;
        this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;

        event.preventDefault();
    }

    onSidebarMouseOver(event) {
        if (this.app.menuMode === 'sidebar') {
            this.sidebarActive = this.isDesktop();
        }
    }

    onSidebarMouseLeave($event) {
        if (this.app.menuMode === 'sidebar') {
            setTimeout(() => {
                this.sidebarActive = false;
            }, 250);
        }
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;

        event.preventDefault();
    }

    onTopbarItemClick(event, item) {
        this.topbarItemClick = true;

        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = item;
        }

        event.preventDefault();
    }

    onTopbarSubItemClick(event) {
        event.preventDefault();
    }

    onRippleChange(event) {
        this.app.ripple = event.checked;
        this.primengConfig.ripple = event.checked;
    }

    onConfigClick(event) {
        this.configClick = true;
    }

    isStatic() {
        return this.app.menuMode === 'static';
    }

    isOverlay() {
        return this.app.menuMode === 'overlay';
    }

    isSlim() {
        return this.app.menuMode === 'slim';
    }

    isHorizontal() {
        return this.app.menuMode === 'horizontal';
    }

    isSidebar() {
        return this.app.menuMode === 'sidebar';
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return window.innerWidth <= 991;
    }

}
