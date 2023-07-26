import { NgModule } from '@angular/core';
import { UserPageComponent } from "./user-page/user-page.component";
import { CommonModule } from "@angular/common";
import { UserPageRoutingModule } from "./user-page-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { FiltersModule } from "../../elements/filters/filters.module";

@NgModule({
  declarations: [ UserPageComponent ],
  exports: [ UserPageComponent ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    SharedModule,
    FiltersModule
  ]
})
export class UserPageModule { }
