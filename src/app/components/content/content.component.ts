import { AfterViewInit, Component, OnInit, Sanitizer, SecurityContext } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { ContentEditComponent } from '../content-edit/content-edit.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ICommonItem } from '../../models/common-item';
import { PagerService } from "../../services/pager/pager.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {
  items: ICommonItem[] = null;
  func;
  tabs = [];
  index = 0;
  length = 0;
  pageSize = 4;

  // MatPaginator Output
  pager: any = {};
  pagedItems: any[];

  constructor(route: ActivatedRoute, private service: ApiService, public dialog: MatDialog, private sanitizer: DomSanitizer, private pagerService: PagerService) {
    this.func = route.data["_value"].function;
  }

  ngOnInit() {
    this.service.get(this.func).then((data: ICommonItem[]) => {
      this.items = data;
      this.length = this.items.length;
      this.setPage(1);
      // console.dir(this.index);
    });
  }

  ngAfterViewInit() {
    // console.dir(this.pager);
  }

  manageTab(event) {
    this.setPage(event.index + 1);
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
      //this.animal = result;
    });
  }

  getImage(imgData) {
    let data_uri_prefix = "data:" + imgData.contentType + ";base64,";
    return this.sanitizer.bypassSecurityTrustUrl(data_uri_prefix + imgData.data);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.items.length, page, this.pageSize);
    // get current page of items
    this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
    // console.dir(this.pagedItems);
  }
}
