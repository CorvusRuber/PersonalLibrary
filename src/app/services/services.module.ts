import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiService } from './api/api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ApiService]
})
export class ServicesModule { }
