import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})

export class ErrorComponent implements OnInit {

  time: number = 7;

  constructor(private location: Location) { 
    setTimeout(() => {
      this.location.back();
    }, 7000);
  }

  ngOnInit(): void {
    setInterval(() => { if (this.time > 0) this.time--; }, 1000);
  }

  goBack() {
    this.location.back();
  }

}