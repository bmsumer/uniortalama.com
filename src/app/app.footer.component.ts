import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer">
            <div class="footer-logo-container">
                <img id="footer-logo" [src]="'assets/layout/images/logo-black.png'" alt="atlantis-layout"/>
                <span class="app-name">ATLANTIS</span>
            </div>
            <span class="copyright">&#169; Your Organization - 2021</span>
        </div>
    `
})
export class AppFooterComponent {

}
