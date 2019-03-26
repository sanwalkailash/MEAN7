import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {environment} from '../environments/environment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {SigninComponent} from './signin/signin.component';
import {AuthGuard} from './auth.guard';


const appRoutes: Routes = [
  { path: environment.ROUTE_LOGIN, component: SigninComponent },
  { path: environment.ROUTE_HOME, component: HomeComponent ,canActivate: [AuthGuard]},
  { path: environment.ROUTE_PAGE_NOT_FOUND, component: PageNotFoundComponent },
  { path: '', redirectTo: environment.ROUTE_LOGIN, pathMatch: 'full' },
  { path: '**', redirectTo: environment.ROUTE_PAGE_NOT_FOUND, pathMatch: 'full' }
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes,{useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
