import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesWidgetComponent } from './devices-widget.component';

describe('DevicesWidgetComponent', () => {
  let component: DevicesWidgetComponent;
  let fixture: ComponentFixture<DevicesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
