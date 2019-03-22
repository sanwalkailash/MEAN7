import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule }    from '@angular/forms';
import {ErrordialogService} from '../errordialog/errordialog.service';
import {UtilService} from '../services/util.service';
import {RestfulService} from '../services/restful.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  loadSpinner:boolean = false;
  mode:string = 'indeterminate';
  value:number = 50;
  constructor(private errorDialogService: ErrordialogService,
              private util:UtilService,
              private rest : RestfulService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false, null)
    });
  }

  onSubmit() {
    if(this.util.validateEmail(this.myForm.value.email)){
      this.loadSpinner = true;
      this.rest.api_POST( {
        username: this.myForm.value.email,
        password: this.myForm.value.password ,
        portalName :  'ChalkPortal'
      },environment.API_LOGIN)
        .subscribe(
          data => {
            console.info('----->>>', data);
            // if ( data.status) {
            //   localStorage.setItem('username', email);
            //   localStorage.setItem("loginData",JSON.stringify(data.loginData));
            //   localStorage.setItem("auth_token", data.auth_token);
            //   localStorage.setItem("refreshToken", data.refreshToken);
            //   this.loadSpinner = false;
            // } else {
            //   this.loadSpinner = false;
            //   this.util.errorMessage(1);
            //   console.log("Wrong email and/or password.");
            // }
          },
          error => {
            this.loadSpinner = false;
            this.util.errorMessage(2);
            // this.app.showMsg('error',"Something went wrong",4000)
          }
        );
      // this.myForm.reset();
    } else {
      this.util.errorMessage(0);
      console.log("Please enter valid email.");
    }
  }


}
