import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RestfulService } from './services/restful.service';
import { UtilService } from './services/util.service';
import { TokeninterceptorService } from './services/tokeninterceptor.service';
import { HttpClientModule,HTTP_INTERCEPTORS }    from '@angular/common/http';
import { ErrordialogComponent } from './errordialog/errordialog.component';
import { ErrordialogService } from './errordialog/errordialog.service';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrordialogComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RestfulService,
    UtilService,
    ErrordialogService,
    { provide: HTTP_INTERCEPTORS, useClass: TokeninterceptorService, multi: true }
  ],
  entryComponents: [ErrordialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
