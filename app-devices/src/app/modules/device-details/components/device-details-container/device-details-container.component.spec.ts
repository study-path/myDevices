import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailsContainerComponent } from './device-details-container.component';

describe('DeviceDetailsContainerComponent', () => {
  let component: DeviceDetailsContainerComponent;
  let fixture: ComponentFixture<DeviceDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
