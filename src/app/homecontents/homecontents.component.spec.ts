import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecontentsComponent } from './homecontents.component';

describe('HomecontentsComponent', () => {
  let component: HomecontentsComponent;
  let fixture: ComponentFixture<HomecontentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecontentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecontentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
