import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRatesPage } from './add-rates.page';

describe('AddRatesPage', () => {
  let component: AddRatesPage;
  let fixture: ComponentFixture<AddRatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
