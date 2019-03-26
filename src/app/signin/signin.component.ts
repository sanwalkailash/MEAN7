import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule }    from '@angular/forms';
import { FormGroupDirective, NgForm} from '@angular/forms';
import {ErrordialogService} from '../errordialog/errordialog.service';
import {UtilService} from '../services/util.service';
import {RestfulService} from '../services/restful.service';
import {environment} from '../../environments/environment';
import { Router,ActivatedRoute }  from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  loadSpinner:boolean = false;
  mode:string = 'indeterminate';
  value:number = 50;
  returnUrl:string;
  profilePic = {
    "name":"default",
    "type":"",
    "size":"",
    "lastModifiedDate":"",
    "result":"/assets/photoplace.jpeg"
  };
  constructor(private errorDialogService: ErrordialogService,
              private util:UtilService,
              private rest : RestfulService,
              private router : Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl(false, null)
    });
    this.registerForm = new FormGroup({
      photo: new FormControl('', null),
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      dob: new FormControl('', [
        Validators.required
      ]),
      contact: new FormControl('', [
        Validators.required
      ])
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || environment.ROUTE_HOME;

  }

  onLoginSubmit() {
    if(this.util.validateEmail(this.loginForm.value.email)){
      this.loadSpinner = true;
      this.rest.api_POST( {
        username: this.loginForm.value.email,
        password: this.loginForm.value.password
      },environment.API_LOGIN)
        .subscribe(
          data => {
            console.info('----->>>', data);
            this.loadSpinner = false;
            if ( data["status"]) {
              localStorage.setItem("user", JSON.stringify(data["user"]))
              localStorage.setItem("token", data["token"])
              this.router.navigate([this.returnUrl])
            } else {
              this.util.alertErrors(data["errors"]);
              console.log("Wrong email and/or password.");
            }
          },
          error => {
            this.loadSpinner = false;
            this.util.errorMessage(2);
          }
        );
      // this.loginForm.reset();
    } else {
      this.util.errorMessage(0);
      console.log("Please enter valid email.");
    }
  }

  onRegisterSubmit() {
    if(this.util.validateEmail(this.registerForm.value.email)){
      this.loadSpinner = true;
      this.rest.api_POST( {
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        dob: this.registerForm.value.dob,
        contact: this.registerForm.value.contact,
        photo: this.profilePic,
        password: this.registerForm.value.password
      },environment.API_REGISTER)
        .subscribe(
          data => {
            console.info('----->>>', data);
            this.loadSpinner = false;
            if ( data["status"]) {
              localStorage.setItem("user", JSON.stringify(data["user"]))
              localStorage.setItem("token", data["token"])
              this.router.navigate([environment.ROUTE_HOME]);
            } else {
              this.util.alertErrors(data["errors"]);
            }
          },
          error => {
            this.loadSpinner = false;
            this.util.errorMessage(0);
          }
        );
      // this.registerForm.reset();
    } else {
      this.util.errorMessage(0);
      console.log("Please enter valid email.");
    }
  }

  fileEvent(event){
    this.profilePic = this.util.readfile(event);
  }


}
