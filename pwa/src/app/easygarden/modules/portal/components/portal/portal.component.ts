import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash, faSort } from '@fortawesome/free-solid-svg-icons';

import { PortalService } from '../../portal.service';
import { UserModel } from '../../../../../_models/userModel';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/easygarden/components/confirmDialog/confirmDialogComponent/confirm-dialog.component';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html'
})

export class PortalComponent implements OnInit, OnDestroy {

  title = "Portail";
  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;
  faSort = faSort;

  // Confirm Dialog this.result = boolean
  result: boolean | undefined;

  // updateStatus()
  status: boolean | undefined;

  // Ngx-paginator
  p: number = 1;
  // Ngx-order
  orderHeader: String = '';
  isDescOrder: boolean = true;
  sort(headerName:String) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }

  users: UserModel[] = [];

  constructor(private portalService: PortalService,
              private dialog: MatDialog) {
  window.scrollTo(0, 0)
  }

  ngOnInit(): void {
    this.fetchPortals()
  }

  // Display Portals
  fetchPortals(): void {
    this.portalService.getAllPortals()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          this.users = res['hydra:member']
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
            this.fetchPortals()
          }
        )
    } else if (status === false) {
      status = !status;
      this.portalService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchPortals()
          }
        )
    }
  }

  // Delete Portal
  confirmDialog(id: number, name: string): void {
    const value = name;
    const message = 'Êtes-vous certain de vouloir supprimer l\'équipement "'+ name +'" ?';
    const dialogData = new ConfirmDialogModel("Confirmer l'action!", message, value);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    })
    
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.portalService.deletePortal(id).subscribe(
          () => {
            this.fetchPortals()
          }
        )
      }   
    })
  }

  ngOnDestroy() {
    // this.portalsService.unsubscribe()
  }

}
