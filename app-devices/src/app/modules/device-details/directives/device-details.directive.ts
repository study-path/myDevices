import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[qwe]',
})
export class DeviceDetailsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}