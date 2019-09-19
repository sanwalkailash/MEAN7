import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {ErrorDialogData} from '../models/DataTypes'


@Component({
  selector: 'app-errordialog',
  templateUrl: './errordialog.component.html',
  styleUrls: ['./errordialog.component.css']
})
export class ErrordialogComponent implements OnInit {

  // title = 'Error';
  constructor(private dialogRef: MatDialogRef<ErrordialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorDialogData) {}

  ngOnInit() {
  }

}
