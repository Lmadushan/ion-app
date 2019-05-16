import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPlanPage } from './travel-plan.page';

describe('TravelPlanPage', () => {
  let component: TravelPlanPage;
  let fixture: ComponentFixture<TravelPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPlanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
