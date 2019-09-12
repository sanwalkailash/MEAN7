import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../auth.guard';
import {UtilService} from '../services/util.service';
import {RestfulService} from '../services/restful.service';
import {environment} from '../../environments/environment';
import { User } from '../models/index';
import {HttpResponse} from '@angular/common/http';
import {Observable,EMPTY, throwError } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  checkAuth:any;
  user : User[];
  testType:string[];
  observableObj:any;
  constructor(private auth:AuthGuard,
    private util:UtilService,
              private rest : RestfulService) {
    this.checkAuth=auth;
   }

  ngOnInit() {
      this.listCustomers();
  }
  // controlling response and rendering it via angular object.
  listCustomers() {
    console.info("listCustomers..")
    this.rest.getUsers( {},environment.API_LIST_USER)
      .subscribe(
        data => {
          // this will not compile as we are ensuring response type duing api call.
          // this.testType = data; 
          this.user = data;
          console.info('----->>>', this.user);
        },
        error => {
          this.util.errorMessage(2);
        }
      );
  }

// direct binding of response with template
//  AsyncPipe is a convenience function which makes rendering data from observables and promises much easier.
// For promises it automatically adds a then callback and renders the response.
// For Observables it automatically subscribes to the observable, renders the output and then also unsubscribes when the component is destroyed so we don’t need to handle the clean up logic ourselves.
  listCustomersByMethod2() {
    console.info("listCustomersByMethod2..")
    this.observableObj = this.rest.getUsers( {},environment.API_LIST_USER) 
  }

}
