import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackagesPage } from './add-packages.page';

describe('AddPackagesPage', () => {
  let component: AddPackagesPage;
  let fixture: ComponentFixture<AddPackagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPackagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPackagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
