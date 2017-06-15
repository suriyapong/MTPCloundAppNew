import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyPageComponent } from './puppy-page.component';

describe('PuppyPageComponent', () => {
  let component: PuppyPageComponent;
  let fixture: ComponentFixture<PuppyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
