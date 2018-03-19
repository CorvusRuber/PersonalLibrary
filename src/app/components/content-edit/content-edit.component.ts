import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { ApiService } from '../../services/api/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss']
})
export class ContentEditComponent implements OnInit {
  item: any;
  required: any;
  titolo; nome; cognome;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ContentEditComponent>, private service: ApiService) {

  }

  ngOnInit() {
    this.item = this.data.item;
    this.required = this.data.requiredFields;
    console.dir(this.data);
  }

  save(f: NgForm) {
    console.dir(f.value);
    if (f.valid) {
      this.service.post(this.data.endpoint, f.value).then(res => {
        this.dialogRef.close();
      }).catch(error => {
        console.log(error);
      });
    } else {
      console.log("Completa la form, cazzo !!!");
    }
  }

  onNoClick(): void {
    //this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
