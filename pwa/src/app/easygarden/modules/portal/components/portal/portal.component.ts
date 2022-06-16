import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { PortalService } from '../../portal.service';
import { PortalModel } from '../../portalModel';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/easygarden/components/confirmDialog/confirmDialogComponent/confirm-dialog.component';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html'
})

export class PortalComponent implements OnInit, OnDestroy {

  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;

  // Confirm Dialog this.result = boolean
  result: boolean |undefined;

  // updateStatus()
  status: boolean | undefined;

  // Ngx-paginator
  p: number = 1;

  portals: PortalModel[] = [];

  constructor(private portalService: PortalService,
              public dialog: MatDialog) {
  window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.fetchPortals();
  }

  // Display Portals
  fetchPortals(): void {
    this.portalService.getAllPortals()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          this.portals = res['hydra:member'];
        }
      )
  }

  // Update Status
  updateStatus(id: number, status: boolean): void {
    if (status === true) {
      status = !status;
      this.portalService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchPortals();
          }
        )
    } else if (status === false) {
      status = !status;
      this.portalService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchPortals();
          }
        )
    }
  }

  // Delete Portal
  confirmDialog(portal: PortalModel): void {
    const message = 'Êtes-vous certain de vouloir supprimer l\'équipement "'+ portal.name +'" ?';
    const dialogData = new ConfirmDialogModel("Confirmer l'action!", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.portals = this.portals.filter(h => h !== portal);
        this.portalService.deletePortal(portal).subscribe();
      }   
    });
  }

  ngOnDestroy() {
    // this.portalsService.unsubscribe();
  }

}
