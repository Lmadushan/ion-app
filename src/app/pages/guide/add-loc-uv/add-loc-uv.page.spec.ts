import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocUvPage } from './add-loc-uv.page';

describe('AddLocUvPage', () => {
  let component: AddLocUvPage;
  let fixture: ComponentFixture<AddLocUvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLocUvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocUvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
