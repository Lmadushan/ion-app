import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideProfilePage } from './guide-profile.page';

describe('GuideProfilePage', () => {
  let component: GuideProfilePage;
  let fixture: ComponentFixture<GuideProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
