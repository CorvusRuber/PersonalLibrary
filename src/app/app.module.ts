import { CONTENT_MODULE, ComponentsModule, contentRoutes } from "./components/components.module";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ServicesModule } from "./services/services.module";

const mainRoutes: Routes = [
  {
    path: CONTENT_MODULE,
    children: contentRoutes
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ServicesModule,
    ComponentsModule,
    RouterModule.forRoot(
      mainRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
