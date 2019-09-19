import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrordialogComponent } from './errordialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrordialogService {

  constructor(public dialog: MatDialog) { }
  openDialog(data={}): void {
    const dialogRef = this.dialog.open(ErrordialogComponent, {
      width: '300px',
      disableClose:false,
      autoFocus:false,
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed.. result',result);
    });
  }
}


