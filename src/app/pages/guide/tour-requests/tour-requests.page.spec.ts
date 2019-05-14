import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourRequestsPage } from './tour-requests.page';

describe('TourRequestsPage', () => {
  let component: TourRequestsPage;
  let fixture: ComponentFixture<TourRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourRequestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
