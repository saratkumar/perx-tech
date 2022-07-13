import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectiveExampleComponent } from './components/attribute-directive-example/attribute-directive-example.component';
import { GridComponent } from './components/grid/grid.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent, data: { animationState: 'One', headerEnabled: false } },
  { path: 'home', component: GridComponent, data: { animationState: 'One', headerEnabled: true } },
  { path: 'directive', component: AttributeDirectiveExampleComponent, data: { animationState: 'Two',  headerEnabled: true } },
  { path: '**',   redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
