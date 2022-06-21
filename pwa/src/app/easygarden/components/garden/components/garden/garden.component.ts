import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { GardenService } from '../../garden.service';
import { GardenModel } from '../../gardenModel';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/easygarden/components/confirmDialog/confirmDialogComponent/confirm-dialog.component';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.scss']
})

export class GardenComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  // Confirm Dialog this.result = boolean
  result: boolean |undefined;

  gardens: GardenModel[] = [];

  constructor(private gardenService: GardenService,
              public dialog: MatDialog,
              public _router: Router) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.fetchGardens();
  }

  // Display Gardens
  fetchGardens(): void {
    this.gardenService.getAllGardens()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member'))
          this.gardens = res['hydra:member'];
        }
      )
  }

  // Delete Garden
  confirmDialog(garden: GardenModel): void {
    const message = 'Êtes-vous certain de vouloir supprimer l\'équipement "'+ garden.name +'" ?';
    const dialogData = new ConfirmDialogModel("Confirmer l'action!", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.gardens = this.gardens.filter(h => h !== garden);
        this.gardenService.deleteGarden(garden).subscribe();
      }   
    });
  }

  ngOnDestroy() {
    // this.gardenService.unsubscribe();
  }

}
