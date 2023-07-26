import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FiltersComponent } from "./filters/filters.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ FiltersComponent ],
  exports: [ FiltersComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FiltersModule { }
