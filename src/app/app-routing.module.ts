import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { WatchedComponent } from './watched/watched.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watched', component: WatchedComponent},
  { path: 'aboutMe', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
