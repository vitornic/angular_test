import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopersComponent } from './pages/developers/developers.component';

const routes: Routes = [
  { path: '', component: DevelopersComponent },
  { path: 'app', component: DevelopersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
