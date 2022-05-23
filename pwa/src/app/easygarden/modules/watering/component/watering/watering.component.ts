import { Component, OnInit } from '@angular/core';

import { WateringService } from '../../watering.service';

@Component({
  selector: 'app-watering',
  templateUrl: './watering.component.html',
  styleUrls: ['./watering.component.scss']
})

export class WateringComponent implements OnInit {

  constructor(private watering: WateringService) { }

  ngOnInit(): void {
  }

}
