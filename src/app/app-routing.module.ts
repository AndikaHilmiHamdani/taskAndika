import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviePopularComponent} from './page/movie-popular/movie-popular.component'
const routes: Routes = [
  {path:'', redirectTo: 'app', pathMatch: 'full' },
  {path:'popular', component: MoviePopularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
