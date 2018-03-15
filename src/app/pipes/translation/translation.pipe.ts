import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translation'
})
export class TranslationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
