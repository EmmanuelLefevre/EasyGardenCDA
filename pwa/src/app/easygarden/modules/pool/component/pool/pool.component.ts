import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { PoolService } from '../../pool.service';
import { PoolModel } from '../../poolModel';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})

export class PoolComponent implements OnInit, OnDestroy {

  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;

  pools: PoolModel[] = [];
  status: boolean | undefined;

  constructor(private poolService: PoolService) { }

  ngOnInit(): void {
    this.fetchPools();
  }

  // Display Pools
  fetchPools(): void {
    this.poolService.getAll()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          // console.log(JSON.stringify(res))  
          this.pools = res['hydra:member'];
        }
      )
  }

  // Update Status
  updateStatus(id: number, status: boolean): void {
    if (status === true) {
      status = !status;
      // console.log(id, status)
      this.poolService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            // console.log(status)
            this.fetchPools();
          }
        )
    } else if (status === false) {
      status = !status;
      // console.log(id, status)
      this.poolService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            // console.log(status)
            this.fetchPools();
          }
        )
    }
  }

  // Delete Pool
  deletePool(pool: PoolModel): void {
    this.pools = this.pools.filter(h => h !== pool);
    this.poolService.deletePool(pool).subscribe()
  }

  ngOnDestroy() {
    // this.lawnmowerService.unsubscribe();
  }

}
