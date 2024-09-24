import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { SpinerService } from './shared-services/spiner.service';
import { LanguageService } from './shared-services/language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    spinnerStatus = false;
    localLangs: string[] = [];

    constructor(
        private primengConfig: PrimeNGConfig,
        private spinerService: SpinerService,
        private cdr: ChangeDetectorRef,
        private languageService: LanguageService,
        translate: TranslateService
    ) {
        this.languageService.languages$.subscribe(langs => {
            langs.forEach(item => {
                this.localLangs.push(item.code);
                translate.addLangs(this.localLangs);
                translate.setDefaultLang(this.localLangs[0]);
            })
        });
        this.languageService.selectedLanguage$.subscribe(lang => {
            translate.use(lang.code);
        })
    }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
    }

    ngAfterContentInit() {
        this.spinerService.get()
        this.cdr.detectChanges();
    }

    getSpinnerValue() {
        this.spinnerStatus = this.spinerService.get();
        return this.spinnerStatus;
    }

}
