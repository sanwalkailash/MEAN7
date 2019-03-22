import { Injectable } from '@angular/core';
import {ErrordialogService} from '../errordialog/errordialog.service';

@Injectable()
export class UtilService {

  errorMessagesArray = ["Please enter valid email.","Wrong email and/or password","Backend Server Issue"]

  constructor(private errorDialogService :ErrordialogService ) { }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  errorMessage(errorcode:any){
    let data = {};
    data = {
      reason: this.errorMessagesArray[errorcode]+'',
      status: errorcode
    };
    this.errorDialogService.openDialog(data);
  }

}
