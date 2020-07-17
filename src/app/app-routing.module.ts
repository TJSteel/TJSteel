import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route imports
import { UnknownComponent } from './screens/unknown/unknown.component';
import { HomeComponent } from './screens/home/home.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
