import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: "full" },
  {
    path: 'users',
    loadChildren: () => import('./pages/user-page/user-page.module').then(m => m.UserPageModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
