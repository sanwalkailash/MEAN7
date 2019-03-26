import { Injectable } from '@angular/core';
import {ErrordialogService} from '../errordialog/errordialog.service';

@Injectable()
export class UtilService {

  errorMessagesArray = ["Please enter valid email.","Wrong email and/or password","Backend Server Issue","Something is not right"]

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

  alertErrors(errors){
    let data = {};
    data = {
      reason: errors,
      status: 1001
    };
    this.errorDialogService.openDialog(data);
  }

  public readfile(event) {
    let fileObj = {
      "name":"",
      "type":"",
      "size":"",
      "lastModifiedDate":"",
      "result":""
    }
    fileObj.name = event.target.files[0].name;
    fileObj.type = event.target.files[0].type;
    fileObj.size = event.target.files[0].size;
    fileObj.lastModifiedDate = event.target.files[0].lastModifiedDate;
    var reader = new FileReader();
    reader.onload = (evt) => {
      console.info("reader object onload: ",evt)
      fileObj.result = evt.target["result"]
    };
    reader.readAsDataURL(event.target.files[0]);
    // console.info("fileSelected",this.util.uploadFile(event.target.files[0]))
    // console.info("fileObj",fileObj)
    return fileObj;
  }

}
