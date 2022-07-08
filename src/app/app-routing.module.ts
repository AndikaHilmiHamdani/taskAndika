import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import {MoviePopularComponent} from './movie-popular/movie-popular.component'
import{MovieTopComponent} from './movie-top/movie-top.component'
import {MovieUpComponent} from './movie-up/movie-up.component'
const routes: Routes = [
  {path:'', redirectTo: 'movie', pathMatch: 'full' },
  {path:'movie',component:MovieComponent},
  {path:'popular', component: MoviePopularComponent},
  {path:'top', component: MovieTopComponent},
  {path:'cooming-soon',component:MovieUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
