import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AuthModule } from './auth/auth.module';
// import { AuthGuard } from '../interceptors/auth.guard';


@NgModule({
    imports: [RouterModule.forChild([
        // { path: 'auth', component: AuthModule },
		// { path: 'users', component: UsersComponent , canActivate: [AuthGuard], data: {permissionsToCheck: ["ADMIN", "USERREAD"]}},
        {
            path: 'admin',
            data: { breadcrumb: 'label.admin' },
            loadChildren: () => import('./admin-pages/admin-pages.module').then(m => m.AdminPagesModule),
        },


		// { path: 'page-2', component: Page2Component , canActivate: [AuthGuard], data: {permissionsToCheck: ["PAGE2"]}},
	])],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
