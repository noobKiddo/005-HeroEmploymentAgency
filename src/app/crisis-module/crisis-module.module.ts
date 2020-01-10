import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import {CrisisDetailComponent} from './crisis-list/crisis-detail/crisis-detail.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DeactivateGuard} from '../deactivate.guard';



@NgModule({
  declarations: [CrisisListComponent, CrisisDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [DeactivateGuard]
})
export class CrisisModuleModule { }
