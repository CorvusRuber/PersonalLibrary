import { Pipe, PipeTransform } from '@angular/core';

import { TranslationService } from '../../services/translation/translation.service';

@Pipe({
  name: 'translation'
})
export class TranslationPipe implements PipeTransform {
  resources: any;

  constructor(private translation: TranslationService) {
    this.translation.loadResources().then(res => {
      return this.resources = res;
    });
  }

  loadResources() { }

  transform(value: any, args?: any): any {
    if (this.resources && this.resources[value]) {
      switch (args) {
        case "capitalize":
          return this.resources[value].replace(/\b(\w)/g, s => s.toUpperCase());
        case "uppercase":
          return this.resources[value].toUpperCase();
        case "lowercase":
          return this.resources[value].toLowerCase();
        default:
          return this.resources[value];
      }
    }
    return value;
  }

}
