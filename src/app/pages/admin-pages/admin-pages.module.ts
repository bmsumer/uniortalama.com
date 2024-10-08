import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPagesRoutingModule } from './admin-pages-routing.module';
// import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        AdminPagesRoutingModule,
        // TranslateModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AdminPagesModule { }
