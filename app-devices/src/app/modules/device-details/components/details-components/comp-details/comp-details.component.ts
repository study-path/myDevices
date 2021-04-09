import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.scss']
})
export class CompDetailsComponent implements OnInit {

  deviceId!: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.deviceId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
