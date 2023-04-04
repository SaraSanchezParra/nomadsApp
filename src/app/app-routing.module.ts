import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNoLogedComponent } from './pages/home-no-loged/home-no-loged.component';

<<<<<<< HEAD

=======
const routes: Routes = [
  {path: "home-no-loged", component: HomeNoLogedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
