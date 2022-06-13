import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { GardenService } from './garden.service';
import { GardenModel } from './gardenModel';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.scss']
})

export class GardenComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  gardens: GardenModel[] = [];

  constructor(private gardenService: GardenService) { }

  ngOnInit(): void {
    this.fetchGardens();
    window.scrollTo(0, 0);
  }

  // Display Gardens
  fetchGardens(): void {
    this.gardenService.getAllGardens()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          this.gardens = res['hydra:member'];
        }
      )
  }

  // Delete Garden
  deleteGarden(garden: GardenModel): void {
    this.gardens = this.gardens.filter(h => h !== garden);
    this.gardenService.deleteGarden(garden).subscribe()
  }

  ngOnDestroy() {
    // this.gardenService.unsubscribe();
  }

}
