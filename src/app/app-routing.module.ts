import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StopComponent} from './stop/stop.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'stop/:id', component: StopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
