import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlonggoComponent } from './ilonggo.component';

describe('IlonggoComponent', () => {
  let component: IlonggoComponent;
  let fixture: ComponentFixture<IlonggoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlonggoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlonggoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
