import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search-device',
  templateUrl: './search-device.component.html',
  styleUrls: ['./search-device.component.scss']
})
export class SearchDeviceComponent implements OnInit {
  criteria!: string;
  
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){   
    this.criteria = "";    
  }

  onSearch(){
    this.search.emit(this.criteria);
  }
}
