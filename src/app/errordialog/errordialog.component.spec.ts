import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule,MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrordialogComponent } from './errordialog.component';
import {ErrordialogService} from './errordialog.service';
import {ErrorDialogData} from '../models/DataTypes'
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing'; 
import {Observable,of} from 'rxjs'


describe('ErrordialogComponent', () => {
  let component: ErrordialogComponent;
  let fixture: ComponentFixture<ErrordialogComponent>;
  let mockData:ErrorDialogData={
    "title":"mock",
    "reason":"mock",
    "status":"Mock"
  }
  let dialog: MatDialog;
  const mockMatDialog = {
    closeAll: (): void => undefined
  };

  // SETUP
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrordialogComponent],
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
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ ErrordialogComponent ],
      }
    })
    .compileComponents();
  }));

  // ACTION : TRIGGER CHANGE DETECTION, ETC.
  beforeEach(() => {
    fixture = TestBed.createComponent(ErrordialogComponent);
    component = fixture.componentInstance;

    dialog = TestBed.get(MatDialog);

    fixture.detectChanges();
  });

  // OUTCOME
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


