import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetaiilComponent } from './article-detaiil.component';

describe('ArticleDetaiilComponent', () => {
  let component: ArticleDetaiilComponent;
  let fixture: ComponentFixture<ArticleDetaiilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetaiilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetaiilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
