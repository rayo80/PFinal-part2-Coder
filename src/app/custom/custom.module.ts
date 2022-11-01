import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AumentarDirective } from './aumentar.directive';


@NgModule({
  declarations: [
    AumentarDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AumentarDirective,
    CommonModule 
  ]
})
export class CustomModule { }