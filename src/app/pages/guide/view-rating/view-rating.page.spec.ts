import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatingPage } from './view-rating.page';

describe('ViewRatingPage', () => {
  let component: ViewRatingPage;
  let fixture: ComponentFixture<ViewRatingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
