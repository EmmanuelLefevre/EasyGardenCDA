import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { LightningModel } from '../../lightningModel';
import { LightningService } from '../../lightning.service';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/easygarden/components/confirmDialog/confirmDialogComponent/confirm-dialog.component';

@Component({
  selector: 'app-lightning',
  templateUrl: './lightning.component.html',
  styleUrls: ['./lightning.component.scss']
})

export class LightningComponent implements OnInit, OnDestroy {

  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;

  // Confirm Dialog this.result = boolean
  result: boolean |undefined;

  // updateStatus()
  status: boolean | undefined;

  // Ngx-paginator
  p: number = 1;

  lightnings: LightningModel[] = [];

  constructor(private lightningService: LightningService,
              public dialog: MatDialog) {
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
          this.lightnings = res['hydra:member'];
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
  confirmDialog(lightning: LightningModel): void {
    const message = 'Êtes-vous certain de vouloir supprimer l\'équipement "'+ lightning.name +'" ?';
    const dialogData = new ConfirmDialogModel("Confirmer l'action!", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.lightnings = this.lightnings.filter(h => h !== lightning);
        this.lightningService.deleteLightning(lightning).subscribe();
      }   
    });
  }

  ngOnDestroy() {
    // this.lighningService.unsubscribe();
  }

}
