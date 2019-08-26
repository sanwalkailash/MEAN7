import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatTabsModule ,
  MatToolbarModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatProgressSpinnerModule ,
  MatProgressBarModule ,
  MatSelectModule,
  MatIconModule ,
  MatRadioModule,
  MatCheckboxModule ,
  MatSnackBarModule,
  MatMenuModule ,
  MatGridListModule ,
  MatAutocompleteModule ,
  MatCardModule,
  MatListModule ,
  MatTooltipModule ,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
}                            from '@angular/material';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CalciComponent } from './calci/calci.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrordialogComponent,
    SigninComponent,
    PageNotFoundComponent,
    HomeComponent,
    CalciComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatProgressBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
