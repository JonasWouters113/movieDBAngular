import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'aboutMe', component: AboutMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
