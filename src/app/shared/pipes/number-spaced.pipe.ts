import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSpaced',
  standalone: true,
})
export class NumberSpacedPipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '';
    const raw = value.toString();
    return raw.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
