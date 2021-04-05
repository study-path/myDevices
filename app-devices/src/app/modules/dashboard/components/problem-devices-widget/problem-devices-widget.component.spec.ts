import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemDevicesWidgetComponent } from './problem-devices-widget.component';

describe('ProblemDevicesWidgetComponent', () => {
  let component: ProblemDevicesWidgetComponent;
  let fixture: ComponentFixture<ProblemDevicesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemDevicesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemDevicesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
