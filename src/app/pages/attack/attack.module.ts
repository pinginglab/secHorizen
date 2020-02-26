import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MembershipData} from '../membership/membership.data';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {NgxPaginationModule} from 'ngx-pagination';
import {PipesModule} from '../../theme/pipes/pipes.module';
import {routes} from '../membership/membership.module';

@NgModule({
  declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(MembershipData, { delay: 0 }),
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        MultiselectDropdownModule,
        NgxPaginationModule,
        PipesModule
  ]
})
export class AttackModule { }
