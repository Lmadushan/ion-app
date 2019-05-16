import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuideProfilePage } from './view-guide-profile.page';

describe('ViewGuideProfilePage', () => {
  let component: ViewGuideProfilePage;
  let fixture: ComponentFixture<ViewGuideProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGuideProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuideProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
