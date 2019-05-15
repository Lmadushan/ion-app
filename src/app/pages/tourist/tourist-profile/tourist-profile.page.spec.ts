import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristProfilePage } from './tourist-profile.page';

describe('TouristProfilePage', () => {
  let component: TouristProfilePage;
  let fixture: ComponentFixture<TouristProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
