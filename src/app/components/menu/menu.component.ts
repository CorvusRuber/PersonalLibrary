import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../services/api/api.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service.get("collections").then((data) => {
      //this.items = data;
      console.dir(data);
    });
  }

}
