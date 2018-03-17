import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material'

import { ApiService } from "../../services/api/api.service";
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {
  menuOpen = false;
  items: any[];
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private service: ApiService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.service.get("collections").then((data) => {
        this.items = data;
        this.items.push({ name: "ricerca" });
        console.dir(data);
        this.items.forEach(element => {
          console.log(element);
        });
      });
    }
  }


}
