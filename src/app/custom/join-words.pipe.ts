import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinWords'
})
export class JoinWordsPipe implements PipeTransform {

  transform(value: string, word2: string): string {
      return `${value}: ${word2}`;
  }


}
