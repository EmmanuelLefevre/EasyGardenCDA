import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { LightningModel } from '../../lightningModel';
import { LightningService } from '../../lightning.service';

@Component({
  selector: 'app-lightning',
  templateUrl: './lightning.component.html',
  styleUrls: ['./lightning.component.scss']
})

export class LightningComponent implements OnInit, OnDestroy {

  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;

  lightnings: LightningModel[] = [];
  status: boolean | undefined;

  constructor(private lightningService: LightningService) { }

  ngOnInit(): void {
    this.fetchLightnings();
    window.scrollTo(0, 0);
  }

  // Display Lightnings
  fetchLightnings(): void {
    this.lightningService.getAllLightnings()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          // console.log(res)   
          this.lightnings = res['hydra:member'];
        }
      )
  }

  // Update Status
  updateStatus(id: number, status: boolean): void {
    if (status === true) {
      status = !status;
      // console.log(id, status)
      this.lightningService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            // console.log(status)
            this.fetchLightnings();
          }
        )
    } else if (status === false) {
      status = !status;
      // console.log(id, status)
      this.lightningService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            // console.log(status)
            this.fetchLightnings();
          }
        )
    }
  }

  // Delete Lightning
  deleteLightning(lightning: LightningModel): void {
    this.lightnings = this.lightnings.filter(h => h !== lightning);
    this.lightningService.deleteLightning(lightning).subscribe()
  }

  ngOnDestroy() {
    // this.lighningService.unsubscribe();
  }

}
