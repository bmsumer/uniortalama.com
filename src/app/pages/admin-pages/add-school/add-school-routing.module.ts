import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddSchoolComponent } from './add-school.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AddSchoolComponent }
	])],
	exports: [RouterModule]
})
export class AddSchoolRoutingModule { }
