import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-device',
  templateUrl: './search-device.component.html',
  styleUrls: ['./search-device.component.scss']
})
export class SearchDeviceComponent implements OnInit {

  search!: string;

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.search = "";
  }

}
