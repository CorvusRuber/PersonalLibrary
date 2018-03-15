import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../services/api/api.service";
import { ContentEditComponent } from '../content-edit/content-edit.component';
import { ICommonItem } from "../../models/common-item";
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  items: ICommonItem[] = null;
  func;


  constructor(route: ActivatedRoute, private service: ApiService, public dialog: MatDialog) {
    this.func = route.data["_value"].function;
    console.log(this.func);
  }

  ngOnInit() {
    this.service.get(this.func).then((data: ICommonItem[]) => {
      this.items = data;
    });
  }

  modify(item) {
    let dialogRef = this.dialog.open(ContentEditComponent,
      {
        width: "35%",
        data:
          { item: item }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.dir(result);
      //this.animal = result;
    });


  }

}
