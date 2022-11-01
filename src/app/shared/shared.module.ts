import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinPipe } from './join.pipe';


@NgModule({
  declarations: [
    JoinPipe,
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [JoinPipe,],
  exports:[
    JoinPipe,
    CommonModule 
  ]
})
export class SharedModule { }
