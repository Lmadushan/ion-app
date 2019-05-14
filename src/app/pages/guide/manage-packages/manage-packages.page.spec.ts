import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePackagesPage } from './manage-packages.page';

describe('ManagePackagesPage', () => {
  let component: ManagePackagesPage;
  let fixture: ComponentFixture<ManagePackagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePackagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePackagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
