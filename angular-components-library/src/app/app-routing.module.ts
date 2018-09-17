import { NgModule } from '@angular/core';
import { ComponentsLibraryComponent } from './components-library/components-library.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ComponentsLibraryComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
