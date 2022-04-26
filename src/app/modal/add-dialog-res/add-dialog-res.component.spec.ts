import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogResComponent } from './add-dialog-res.component';

describe('AddDialogResComponent', () => {
  let component: AddDialogResComponent;
  let fixture: ComponentFixture<AddDialogResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDialogResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
