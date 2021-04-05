import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesStatusesWidgetComponent } from './devices-statuses-widget.component';

describe('DevicesStatusesWidgetComponent', () => {
  let component: DevicesStatusesWidgetComponent;
  let fixture: ComponentFixture<DevicesStatusesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesStatusesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesStatusesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
