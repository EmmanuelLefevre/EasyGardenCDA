import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { LawnmowerService } from '../../lawnmower.service';
import { LawnmowerModel } from '../../lawnmowerModel';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/easygarden/components/confirmDialog/confirmDialogComponent/confirm-dialog.component';

@Component({
  selector: 'app-lawnmower',
  templateUrl: './lawnmower.component.html'
})

export class LawnmowerComponent implements OnInit, OnDestroy {

  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;

  // Confirm Dialog this.result = boolean
  result: boolean | undefined;

  // updateStatus()
  status: boolean | undefined;

  // Ngx-paginator
  p: number = 1;

  lawnmowers: LawnmowerModel[] = [];

  constructor(private lawnmowerService: LawnmowerService,
              private dialog: MatDialog) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.fetchLawnmowers();
  }

  // Display Lawnmowers
  fetchLawnmowers(): void {
    this.lawnmowerService.getAllLawnmowers()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member')) 
          this.lawnmowers = res['hydra:member'];
        }
      )
  }

  // Update Status
  updateStatus(id: number, status: boolean): void {
    if (status === true) {
      status = !status;
      this.lawnmowerService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchLawnmowers();
          }
        )
    } else if (status === false) {
      status = !status;
      this.lawnmowerService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchLawnmowers();
          }
        )
    }
  }

  // Delete Lawnmower
  confirmDialog(lawnmower: LawnmowerModel): void {
    const message = 'Êtes-vous certain de vouloir supprimer l\'équipement "'+ lawnmower.name +'" ?';
    const dialogData = new ConfirmDialogModel("Confirmer l'action!", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.lawnmowers = this.lawnmowers.filter(h => h !== lawnmower);
        this.lawnmowerService.deleteLawnmower(lawnmower).subscribe();
        window.location.reload();
      }   
    });
  }

  ngOnDestroy() {
    // this.lawnmowerService.unsubscribe();
  }

}
