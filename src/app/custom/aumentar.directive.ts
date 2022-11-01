import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAumentar]'
})
export class AumentarDirective {

  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.fontSize = '20px';
    //elemento.nativeElement.style.backgroundColor = 'yellow';
  }


}
