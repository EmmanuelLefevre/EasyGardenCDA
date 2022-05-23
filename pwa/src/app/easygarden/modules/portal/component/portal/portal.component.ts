import { Component, OnInit } from '@angular/core';

import { PortalService } from '../../portal.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})

export class PortalComponent implements OnInit {

  constructor(private portal: PortalService) { }

  ngOnInit(): void {
  }

}
