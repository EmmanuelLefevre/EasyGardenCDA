import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { WateringService } from '../../watering.service';
import { WateringModel } from '../../wateringModel';

@Component({
  selector: 'app-watering',
  templateUrl: './watering.component.html',
  styleUrls: ['./watering.component.scss']
})

export class WateringComponent implements OnInit, OnDestroy {

  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;

  waterings: WateringModel[] = [];
  status: boolean | undefined;
  
  constructor(private wateringService: WateringService) { }
  
  ngOnInit(): void {
    this.fetchWaterings();
    window.scrollTo(0, 0);
  }
  
  // Display Waterings
  fetchWaterings(): void {
    this.wateringService.getAllWaterings()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          // console.log(res);
          this.waterings = res['hydra:member'];
        }
      )
  }

  // Update Status
  updateStatus(id: number, status: boolean): void {
    if (status === true) {
      status = !status;
      // console.log(id, status)
      this.wateringService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            // console.log(status)
            this.fetchWaterings();
          }
        )
    } else if (status === false) {
      status = !status;
      // console.log(id, status)
      this.wateringService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            // console.log(status)
            this.fetchWaterings();
          }
        )
    }
  }

  // Delete Watering
  deleteWatering(watering: WateringModel): void {
    this.waterings = this.waterings.filter(h => h !== watering);
    this.wateringService.deleteWatering(watering).subscribe()
  }

  ngOnDestroy() {
    // this.wateringService.unsubscribe();
  }

}
