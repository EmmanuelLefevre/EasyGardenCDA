import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { WateringService } from '../../watering.service';
import { UserModel } from '../../../../../_models/userModel';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/easygarden/components/confirmDialog/confirmDialogComponent/confirm-dialog.component';

@Component({
  selector: 'app-watering',
  templateUrl: './watering.component.html'
})

export class WateringComponent implements OnInit, OnDestroy {

  title = 'Arrosage';
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

  constructor(private wateringService: WateringService,
              private dialog: MatDialog) {
    window.scrollTo(0, 0)
  }
  
  ngOnInit(): void {
    this.fetchWaterings()
  }
  
  // Display Waterings
  fetchWaterings(): void {
    this.wateringService.getAllWaterings()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          // console.log(res)
          this.users = res['hydra:member']
          // console.log(this.users)
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
            this.fetchWaterings()
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
            this.fetchWaterings()
          }
        )
    }
  }

  // Delete Watering
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
        this.wateringService.deleteWatering(id).subscribe(
          () => {
            this.fetchWaterings()
          }
        )
      }   
    })
  }

  ngOnDestroy() {
    // this.wateringService.unsubscribe()
  }

}
