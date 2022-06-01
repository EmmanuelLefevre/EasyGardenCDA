import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { PortalService } from '../../portal.service';
import { PortalModel } from '../../portalModel';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})

export class PortalComponent implements OnInit, OnDestroy {

  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;

  portals: PortalModel[] = [];
  status: boolean | undefined;

  constructor(private portalService: PortalService) { }

  ngOnInit(): void {
    this.fetchPortals();
  }

  // Display Portals
  fetchPortals(): void {
    this.portalService.getAll()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          // console.log(JSON.stringify(res))  
          this.portals = res['hydra:member'];
        }
      )
  }

  // Update Status
  updateStatus(id: number, status: boolean): void {
    if (status === true) {
      status = !status;
      // console.log(id, status)
      this.portalService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            // console.log(status)
            this.fetchPortals();
          }
        )
    } else if (status === false) {
      status = !status;
      // console.log(id, status)
      this.portalService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            // console.log(status)
            this.fetchPortals();
          }
        )
    }
  }

  // Delete Portal
  deletePortal(portal: PortalModel): void {
    this.portals = this.portals.filter(h => h !== portal);
    this.portalService.deletePortal(portal).subscribe()
  }

  ngOnDestroy() {
    // this.portalsService.unsubscribe();
  }

}
