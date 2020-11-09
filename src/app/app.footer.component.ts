import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer clearfix">
            <img src="assets/layout/images/logo-white.png"/>
            <span>PrimeNG ATLANTIS</span>
            <a href="https://github.com/primefaces/primeng"><i class="pi pi-github"></i></a>
            <a href="https://www.facebook.com/groups/primefaces"><i class="pi pi-facebook"></i></a>
            <a href="https://twitter.com/prime_ng"><i class="pi pi-twitter"></i></a>
        </div>
    `
})
export class AppFooterComponent {

}
