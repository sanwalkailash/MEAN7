import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RestfulService } from './services/restful.service';
import { UtilService } from './services/util.service';
import { TokeninterceptorService } from './services/tokeninterceptor.service';
import { HttpClientModule }    from '@angular/common/http';
import { ErrordialogComponent } from './errordialog/errordialog.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ErrordialogComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [RestfulService, UtilService, TokeninterceptorService]
})
export class AppModule { }
