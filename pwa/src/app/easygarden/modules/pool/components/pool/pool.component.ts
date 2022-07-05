import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { PoolService } from '../../pool.service';
import { UserModel } from '../../../../../_models/userModel';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/easygarden/components/confirmDialog/confirmDialogComponent/confirm-dialog.component';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html'
})

export class PoolComponent implements OnInit, OnDestroy {

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

  constructor(private poolService: PoolService,
              private dialog: MatDialog) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.fetchPools();
  }

  // Display Pools
  fetchPools(): void {
    this.poolService.getAllPools()
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
      this.poolService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchPools();
          }
        )
    } else if (status === false) {
      status = !status;
      this.poolService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchPools();
          }
        )
    }
  }

  // Delete Pool
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
        this.poolService.deletePool(id).subscribe(
          (_res:any) => {
            this.fetchPools();
          }
        );
      }   
    });
  }

  ngOnDestroy() {
    // this.lawnmowerService.unsubscribe();
  }

}
