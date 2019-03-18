import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrordialogComponent } from './errordialog.component';

@Injectable()
export class ErrordialogService {

  constructor(public dialog: MatDialog) { }
  openDialog(data): void {
    const dialogRef = this.dialog.open(ErrordialogComponent, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let animal;
      animal = result;
    });
  }
}
