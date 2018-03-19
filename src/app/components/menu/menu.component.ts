import { Component, Input, OnInit } from "@angular/core";

import { ApiService } from "../../services/api/api.service";
import { ContentEditComponent } from "../content-edit/content-edit.component";
import { CustomSearchComponent } from "../custom-search/custom-search.component";
import { ICommonItem } from "../../models/common-item";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  @Input("menuData") menuData;

  constructor(private service: ApiService, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  navigate(endpoint) {
    this.router.navigate(["/index/" + endpoint]);
    // console.log(endpoint);
  }

  insert(endpoint) {
    const fields = this.service.getNewItemPayload(endpoint);
    const dialogRef = this.dialog.open(ContentEditComponent,
      {
        width: "35%",
        data:
          { item: null, requiredFields: fields, endpoint: endpoint }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(["/index/"]).then(res => {
        this.router.navigate(["/index/" + endpoint]);
      });
    });
  }

  search() {
    const dialogRef = this.dialog.open(CustomSearchComponent,
      {
        width: "55%",
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.dir(result);
    });
  }

}
