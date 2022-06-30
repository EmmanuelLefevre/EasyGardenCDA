import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { LightningService } from '../../lightning.service';
import { UserModel } from '../../../../../_models/userModel';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/easygarden/components/confirmDialog/confirmDialogComponent/confirm-dialog.component';

@Component({
  selector: 'app-lightning',
  templateUrl: './lightning.component.html'
})

export class LightningComponent implements OnInit, OnDestroy {

  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;

  // Confirm Dialog this.result = boolean
  result: boolean | undefined;

  // updateStatus()
  status: boolean | undefined;

  // Ngx-paginator
  p: number = 1;

  users: UserModel[] = [];

  constructor(private lightningService: LightningService,
              private dialog: MatDialog) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.fetchLightnings();
  }

  // Display Lightnings
  fetchLightnings(): void {
    this.lightningService.getAllLightnings()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member')) 
          this.users = res['hydra:member'];
        }
      )
  }

  // Update Status
  updateStatus(id: number, status: boolean): void {
    if (status === true) {
      status = !status;
      this.lightningService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchLightnings();
          }
        )
    } else if (status === false) {
      status = !status;
      this.lightningService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchLightnings();
          }
        )
    }
  }

  // Delete Lightning
  confirmDialog(id: number, name: string): void {
    const message = 'Êtes-vous certain de vouloir supprimer l\'équipement "'+ name +'" ?';
    const dialogData = new ConfirmDialogModel("Confirmer l'action!", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.lightningService.deleteLightning(id).subscribe();
        this.fetchLightnings();
      }   
    });
  }

  ngOnDestroy() {
    // this.lighningService.unsubscribe();
  }

}
