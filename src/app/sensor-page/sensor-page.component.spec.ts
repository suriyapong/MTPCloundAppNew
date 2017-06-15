import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorPageComponent } from './sensor-page.component';

describe('SensorPageComponent', () => {
  let component: SensorPageComponent;
  let fixture: ComponentFixture<SensorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
