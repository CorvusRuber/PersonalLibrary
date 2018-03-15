import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiService } from './api/api.service';
import { TranslationService } from './translation/translation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ApiService, TranslationService]
})
export class ServicesModule { }
