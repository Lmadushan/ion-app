import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateGuidePage } from './rate-guide.page';

describe('RateGuidePage', () => {
  let component: RateGuidePage;
  let fixture: ComponentFixture<RateGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateGuidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
