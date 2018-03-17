import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.scss']
})
export class CustomSearchComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomSearchComponent>) { }

  ngOnInit() {
  }

  search() {
    console.log("Ricerca in corso");
  }

  close() {
    this.dialogRef.close();
  }
}
