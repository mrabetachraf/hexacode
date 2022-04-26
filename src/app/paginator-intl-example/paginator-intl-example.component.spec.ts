import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorIntlExampleComponent } from './paginator-intl-example.component';

describe('PaginatorIntlExampleComponent', () => {
  let component: PaginatorIntlExampleComponent;
  let fixture: ComponentFixture<PaginatorIntlExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorIntlExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorIntlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
