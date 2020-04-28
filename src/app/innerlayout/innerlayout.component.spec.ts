import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerlayoutComponent } from './innerlayout.component';

describe('InnerlayoutComponent', () => {
  let component: InnerlayoutComponent;
  let fixture: ComponentFixture<InnerlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
