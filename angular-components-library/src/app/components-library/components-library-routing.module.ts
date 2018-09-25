import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsLibraryComponent } from './components-library.component';
import { ButtonWidgetComponent } from '../widgets/button-widget/button-widget.component';

const ComponentsLibraryRoutes: Routes = [
  {
    path: 'componentsLibrary', component: ComponentsLibraryComponent,
    children: [
      { path: 'button', component: ButtonWidgetComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(ComponentsLibraryRoutes)],
  exports: [RouterModule]
})
export class ComponentsLibraryRoutingModule { }
