import { Injectable } from '@angular/core';
import {ErrordialogService} from '../errordialog/errordialog.service';
import {ErrorDialogData} from '../models/DataTypes'
import {environment as constants}  from '../../environments/environment'

@Injectable()
export class UtilService {

  constructor(private errorDialogService :ErrordialogService ) { }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  errorMessage(errorcode:any){
    let data:ErrorDialogData = {
      reason: constants[errorcode],
      status: errorcode,
      title : "Default"
    };
    this.errorDialogService.openDialog(data);
  }

  alertErrors(errors){
    let data:ErrorDialogData = {
      reason: errors,
      status: "1001",
      title : "Default"
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
