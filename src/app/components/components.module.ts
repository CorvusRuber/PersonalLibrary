import {
  MatButtonModule,
  MatCheckboxModule,
  MatCommonModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule, Routes } from "@angular/router";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';
import { ContentEditComponent } from './content-edit/content-edit.component';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { MatCardModule } from '@angular/material/card';
import { MediaMatcher } from "@angular/cdk/layout";
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { PipesModule } from "../pipes/pipes.module";
import { SearchResultComponent } from './search-result/search-result.component';
import { TranslationPipe } from "../pipes/translation/translation.pipe";
import { WelcomeComponent } from './welcome/welcome.component';

export let CONTENT_MODULE = "content-module";


export const contentRoutes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: ContainerComponent,
    children: [
      {
        path: "",
        component: WelcomeComponent
      },
      {
        path: "books",
        component: ContentComponent,
        data: { function: "books" }
      },
      {
        path: "authors",
        component: ContentComponent,
        data: { function: "authors" }
      },
      {
        path: "publishers",
        component: ContentComponent,
        data: { function: "publishers" }
      },
      {
        path: "genres",
        component: ContentComponent,
        data: { function: "genres" }
      },
      {
        path: "ricerca",
        component: SearchResultComponent,
        data: { function: "ricerca" }
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
  },
  // {
  //   path: 'detail',
  //   component: DetailComponent,
  //   children: [{
  //     path: "default",
  //     component: DefaultComponent
  //   },
  // {
  //   path: ComponentPathNames.DATI_CONTRATTUALI,
  //   component: DataDisplayComponent,
  //   data: { function: ComponentPathNames.DATI_CONTRATTUALI }
  // },
  // {
  //   path: ComponentPathNames.CONSUMI_EE,
  //   component: DataDisplayComponent,
  //   data: { function: ComponentPathNames.CONSUMI_EE }
  // },
  // {
  //   path: ComponentPathNames.PUNTI_FORNITURA,
  //   component: DataDisplayComponent,
  //   data: { function: ComponentPathNames.PUNTI_FORNITURA }
  // },
  // {
  //   path: ComponentPathNames.FATTURE,
  //   component: DataDisplayComponent,
  //   data: { function: ComponentPathNames.FATTURE }
  // },
  // {
  //   path: ComponentPathNames.LISTINI,
  //   component: DataDisplayComponent,
  //   data: { function: ComponentPathNames.LISTINI }
  // },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatPaginatorModule,
    PipesModule,
    RouterModule.forRoot(
      contentRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  declarations: [
    ContainerComponent,
    NotFoundComponent,
    ContentComponent,
    MenuComponent,
    WelcomeComponent,
    ContentEditComponent,
    CustomSearchComponent,
    SearchResultComponent
  ],
  entryComponents: [ContentEditComponent, CustomSearchComponent],
  providers: [MediaMatcher, TranslationPipe]
})
export class ComponentsModule { }
