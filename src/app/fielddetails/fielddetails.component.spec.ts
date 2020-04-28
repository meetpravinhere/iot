import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FielddetailsComponent } from './fielddetails.component';

describe('FielddetailsComponent', () => {
  let component: FielddetailsComponent;
  let fixture: ComponentFixture<FielddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FielddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FielddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
