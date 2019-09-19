import { TestBed } from '@angular/core/testing';

import { ErrordialogService } from './errordialog.service';
import {ErrorDialogData} from '../models/DataTypes'
import { MatDialogModule,MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ErrordialogService', () => {
  let mockData:ErrorDialogData={
    "title":"mock",
    "reason":"mock",
    "status":"Mock"
  }
  let dialog: MatDialog;
  const mockMatDialog = {
    closeAll: (): void => undefined
  };
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        // TestModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockData}, 
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useValue: mockMatDialog },
        {
          provide: ErrordialogService,
          useValue: {}
        }
      ],
  }));

  it('should be created', () => {
    const service: ErrordialogService = TestBed.get(ErrordialogService);
    expect(service).toBeTruthy();
  });
});
