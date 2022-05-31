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
  }
  
  // Display Waterings
  fetchWaterings() {
    this.wateringService.getAll()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          // console.log(JSON.stringify(res))  
          this.waterings = res['hydra:member'];
        }
      )
  }

  // Update Status
  updateStatus(id: number, status: boolean) {
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
  deleteWatering(id: number) {
    this.wateringService.deleteWatering(id)
      .subscribe(
        (res:any) => {
          this.waterings = res
          this.fetchWaterings();
        }
      )
  }

  ngOnDestroy() {
    // this.wateringService.unsubscribe();
  }

}
