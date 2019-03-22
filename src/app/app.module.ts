import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule,MatButtonModule,MatDialogModule,MatInputModule, MatTabsModule  } from '@angular/material';
import { MatButtonToggleModule, MatSliderModule }       from '@angular/material';
import { MatProgressSpinnerModule }                    from '@angular/material';
import { MatProgressBarModule }                        from '@angular/material';
import { MatSelectModule, MatIconModule }               from '@angular/material';
import { MatRadioModule, MatCheckboxModule }            from '@angular/material';
import { MatSnackBarModule, MatMenuModule }             from '@angular/material';
import { MatGridListModule }                           from '@angular/material';
import { MatAutocompleteModule }                       from '@angular/material';
import { MatCardModule, MatListModule }                 from '@angular/material';
import { MatTooltipModule }                            from '@angular/material';
import { MatChipsModule }                            from '@angular/material';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrordialogComponent,
    SigninComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule, MatDialogModule,
    MatInputModule, MatTabsModule, MatAutocompleteModule,
    MatButtonToggleModule, MatSliderModule,
    MatProgressSpinnerModule, MatSelectModule, MatProgressBarModule,
    MatIconModule, MatCheckboxModule,
    MatRadioModule, MatSnackBarModule, MatTooltipModule,
    MatGridListModule, MatMenuModule,
    MatCardModule, MatListModule,MatChipsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
