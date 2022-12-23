import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPowerOff, faPen, faTrash, faSort, faSearch, faSeedling } from '@fortawesome/free-solid-svg-icons';

import { LawnmowerService } from '../../lawnmower.service';
import { UserModel } from '../../../../../_models/userModel';
import { LawnmowerFilterModel } from '../../lawnmowerModel';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/easygarden/components/confirmDialog/confirmDialogComponent/confirm-dialog.component';

@Component({
  selector: 'app-lawnmower',
  templateUrl: './lawnmower.component.html'
})

export class LawnmowerComponent implements OnInit, OnDestroy {

  title = "Tondeuse";
  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;
  faSort = faSort;
  faSearch = faSearch;
  faSeedling = faSeedling;

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
  // Ngx-filter
  searchInput: LawnmowerFilterModel = { name: ''};
  clearInput() {
    this.searchInput.name = '';
  }

  users: UserModel[] = [];

  constructor(private lawnmowerService: LawnmowerService,
              private dialog: MatDialog) {
    window.scrollTo(0, 0)
  }

  ngOnInit(): void {
    this.fetchLawnmowers()
  }

  // Display Lawnmowers
  fetchLawnmowers(): void {
    this.lawnmowerService.getAllLawnmowers()
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
      this.lawnmowerService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchLawnmowers()
          }
        )
    } else if (status === false) {
      status = !status;
      this.lawnmowerService.updateStatus(status, id)
        .subscribe(
          (res:any) => {
            this.status = res
            this.fetchLawnmowers()
          }
        )
    }
  }

  // Delete Lawnmower
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
        this.lawnmowerService.deleteLawnmower(id).subscribe(
          () => {
            this.fetchLawnmowers()
          }
        )
      }   
    })
  }

  ngOnDestroy() {
    // this.lawnmowerService.unsubscribe()
  }

}
