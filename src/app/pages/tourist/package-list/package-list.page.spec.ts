import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageListPage } from './package-list.page';

describe('PackageListPage', () => {
  let component: PackageListPage;
  let fixture: ComponentFixture<PackageListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
