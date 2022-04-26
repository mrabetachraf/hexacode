import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCollaboratorComponent } from './rate-collaborator.component';

describe('RateCollaboratorComponent', () => {
  let component: RateCollaboratorComponent;
  let fixture: ComponentFixture<RateCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateCollaboratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
