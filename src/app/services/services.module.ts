import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiService } from './api/api.service';
import { TranslationService } from './translation/translation.service';
import { PagerService } from './pager/pager.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ApiService, TranslationService, PagerService]
})
export class ServicesModule { }
