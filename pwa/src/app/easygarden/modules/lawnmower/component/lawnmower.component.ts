import { Component, OnInit } from '@angular/core';

import { LawnmowerService } from '../lawnmower.service';

@Component({
  selector: 'app-lawnmower',
  templateUrl: './lawnmower.component.html',
  styleUrls: ['./lawnmower.component.scss']
})

export class LawnmowerComponent implements OnInit {

  constructor(private lawnmower: LawnmowerService) { }

  ngOnInit(): void {
  }

}
