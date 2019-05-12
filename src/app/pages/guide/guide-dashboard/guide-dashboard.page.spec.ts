import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideDashboardPage } from './guide-dashboard.page';

describe('GuideDashboardPage', () => {
  let component: GuideDashboardPage;
  let fixture: ComponentFixture<GuideDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideDashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
