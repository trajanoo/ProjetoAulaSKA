import { Component, inject } from '@angular/core';
import { ProductionControl } from '../production-control/production-control';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DialogSelect } from '../dialog-select/dialog-select';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-terminal',
  imports: [ProductionControl, MatDialogModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss'
})
export class Terminal {

  readonly dialog: MatDialog = inject(MatDialog)

  setProductionOrder() {
    console.log("teste")
    this.openSelectDialog()
  }

  openSelectDialog(): any {
    const dialogRef: MatDialogRef<DialogSelect, any> = this.dialog.open(DialogSelect, {
      width: '950px'
    });

    return new Promise((resolve) => {
      dialogRef.afterClosed().subscribe((result) => {
        resolve(result);
      })
    })

    
  }
}
