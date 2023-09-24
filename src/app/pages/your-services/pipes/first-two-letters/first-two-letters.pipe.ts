/* Place your angular imports here */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstTwoLetters'
})
export class FirstTwoLettersPipe implements PipeTransform {
  public transform(value: string): string {
    return value.slice(0, 2).toUpperCase();
  }
}
