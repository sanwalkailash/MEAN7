import { TestBed } from '@angular/core/testing';
import { RestfulService } from './restful.service';
import {ErrorDialogData} from '../models/DataTypes'
import { MatDialogModule,MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('RestfulService', () => {
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
          provide: RestfulService,
          useValue: {}
        }
      ],
  }));

  it('should be created', () => {
    const service: RestfulService = TestBed.get(RestfulService);
    expect(service).toBeTruthy();
  });
});
