import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';


const route: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', children: [
      {
        path: 'test', component: AboutComponent
      },
      {
        path: 'test/:id', component: LandingPageComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ]
})
export class AppRoutingModule { }
