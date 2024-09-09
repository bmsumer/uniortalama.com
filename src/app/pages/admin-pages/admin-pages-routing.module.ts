// import { AdminPagesComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([

    {
      path: 'add-school',
      data: { breadcrumb: 'label.add-school' },
      loadChildren: () =>
        import(
          './add-school/add-school.module'
        ).then(m => m.AddSchoolModule),
    },
    // data: { permissionsToCheck: ["ADMIN", "DASHBOARDREAD"] }
    // canActivate: [AuthGuard],
    // {
    //   path: '',
    //   loadChildren: () =>
    //     import(
    //       './dashboard-local/dashboard-local.module'
    //     ).then(m => m.DashboardLocalModule),
    //   canActivate: [AuthGuard],
    //   data: { permissionsToCheck: ["ADMIN", "DASHBOARDREAD", "USERCREATE", "USERREAD", "USERUPDATE", "USERDELETE", "TICKETADMIN", "TICKETCREATE", "TICKETREAD", "TICKETUPDATE", "TICKETDELETE", 'SURVEYREAD', 'SURVEYUPDATE', 'SURVEYCREATE'] }
    // },

  ])],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }

