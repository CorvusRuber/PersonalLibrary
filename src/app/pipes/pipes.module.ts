import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslationPipe } from './translation/translation.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TranslationPipe],
  exports: [TranslationPipe]
})
export class PipesModule { }
