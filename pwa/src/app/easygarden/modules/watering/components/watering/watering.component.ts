import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { WateringService } from '../../watering.service';
import { WateringModel } from '../../wateringModel';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/easygarden/components/confirmDialog/confirmDialogComponent/confirm-dialog.component';

@Component({
  selector: 'app-watering',
  templateUrl: './watering.component.html'
})

export class WateringComponent implements OnInit, OnDestroy {

  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;

  // Confirm Dialog this.result = boolean
  result: boolean | undefined;

  // updateStatus()
  status: boolean | undefined;

  // Ngx-paginator
  p: number = 1;

  waterings: WateringModel[] = [];

  constructor(private wateringService: WateringService,
              private dialog: MatDialog) {
    window.scrollTo(0, 0);
  }
  
  ngOnInit(): void {
    this.fetchWaterings();
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
  confirmDialog(watering: WateringModel): void {
    const message = 'Êtes-vous certain de vouloir supprimer l\'équipement "'+ watering.name +'" ?';
    const dialogData = new ConfirmDialogModel("Confirmer l'action!", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.waterings = this.waterings.filter(h => h !== watering);
        this.wateringService.deleteWatering(watering).subscribe();
        window.location.reload();
      }   
    });
  }

  ngOnDestroy() {
    // this.wateringService.unsubscribe();
  }

}
