import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { EmailPipe } from "./pipes/email-pipe.pipe";
import { HighligthPipe } from "./pipes/highligth.pipe";

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
