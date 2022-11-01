import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(word1: string, word2: string): string {
    return `${word1}: ${word2}`;
}

}
