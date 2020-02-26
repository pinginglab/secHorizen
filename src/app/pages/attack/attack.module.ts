import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {NgxPaginationModule} from 'ngx-pagination';
import {PipesModule} from '../../theme/pipes/pipes.module';
import {AttackComponent} from './attack.component';
import {AttackData} from './attack.data';

export const routes = [
    { path: '', component: AttackComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
      AttackComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(AttackData, { delay: 0 }),
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
