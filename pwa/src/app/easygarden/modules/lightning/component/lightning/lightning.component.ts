import { Component, OnInit } from '@angular/core';

import { LightningService } from '../../lightning.service';

@Component({
  selector: 'app-lightning',
  templateUrl: './lightning.component.html',
  styleUrls: ['./lightning.component.scss']
})

export class LightningComponent implements OnInit {

  constructor(private lightning: LightningService) { }

  ngOnInit(): void {
  }

}
