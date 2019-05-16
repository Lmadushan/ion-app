import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPackagePage } from './view-package.page';

describe('ViewPackagePage', () => {
  let component: ViewPackagePage;
  let fixture: ComponentFixture<ViewPackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPackagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
