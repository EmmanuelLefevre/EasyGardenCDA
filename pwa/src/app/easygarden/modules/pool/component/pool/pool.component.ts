import { Component, OnInit } from '@angular/core';

import { PoolService } from '../../pool.service';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})

export class PoolComponent implements OnInit {

  constructor(private pool: PoolService) { }

  ngOnInit(): void {
  }

}
