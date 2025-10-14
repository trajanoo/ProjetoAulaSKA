import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-select',
  imports: [MatDialogModule, CommonModule],
  templateUrl: './dialog-select.html',
  styleUrl: './dialog-select.scss'
})
export class DialogSelect {
  dialogTitle: string = '';
  optionsList: any = null;

  constructor(public dialogRef: MatDialogRef<DialogSelect>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogTitle = data.dialogTitle;
    this.optionsList = data.optionsList
  }

  closeDialog(): void {
    this.dialogRef.close()
  }
}
