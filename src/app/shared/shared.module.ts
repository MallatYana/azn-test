import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { EmailPipe } from "./email-pipe.pipe";
import { HighligthPipe } from './highligth.pipe';

@NgModule({
  declarations: [
    EmailPipe,
    HighligthPipe
  ],
  exports: [
    EmailPipe,
    HighligthPipe
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
