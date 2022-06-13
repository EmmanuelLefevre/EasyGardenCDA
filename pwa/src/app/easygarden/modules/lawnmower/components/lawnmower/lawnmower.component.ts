import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { LawnmowerService } from '../../lawnmower.service';
import { LawnmowerModel } from '../../lawnmowerModel';

@Component({
  selector: 'app-lawnmower',
  templateUrl: './lawnmower.component.html',
  styleUrls: ['./lawnmower.component.scss']
})

export class LawnmowerComponent implements OnInit, OnDestroy {

  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;

  lawnmowers: LawnmowerModel[] = [];
  status: boolean | undefined;

  constructor(private lawnmowerService: LawnmowerService) { }

  ngOnInit(): void {
    this.fetchLawnmowers();
    window.scrollTo(0, 0);
  }

  // Display Lawnmowers
  fetchLawnmowers(): void {
    this.lawnmowerService.getAllLawnmowers()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          // console.log(res)  
          this.lawnmowers = res['hydra:member'];
        }
      )
  }

  // Update Status
  updateStatus(id: number, status: boolean): void {
    if (status === true) {
      status = !status;
      // console.log(id, status)
      this.lawnmowerService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            // console.log(status)
            this.fetchLawnmowers();
          }
        )
    } else if (status === false) {
      status = !status;
      // console.log(id, status)
      this.lawnmowerService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            // console.log(status)
            this.fetchLawnmowers();
          }
        )
    }
  }

  // Delete Lawnmower
  deleteLawnmower(lawnmower: LawnmowerModel): void {
    this.lawnmowers = this.lawnmowers.filter(h => h !== lawnmower);
    this.lawnmowerService.deleteLawnmower(lawnmower).subscribe()
  }

  ngOnDestroy() {
    // this.lawnmowerService.unsubscribe();
  }

}
