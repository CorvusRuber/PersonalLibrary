import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss']
})
export class ContentEditComponent implements OnInit {
  item: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ContentEditComponent>) {

  }

  ngOnInit() {
    this.item = this.data.item;
  }

  onNoClick(): void {
    //this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
