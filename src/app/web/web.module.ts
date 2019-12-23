import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TravelsComponent } from './travels/travels.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../shared/components/components.module';

const routes: Routes =  [
  {
    path: '',
    children: [
      {
        path: 'books',
        loadChildren: './books/books.module#BooksModule'
      },
      {
        path: 'travels',
        component: TravelsComponent
      },
      {
        path: 'personnel',
        component: PersonnelComponent
      },
      {
        path: 'main',
        component: MainComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [TravelsComponent, PersonnelComponent, MainComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class WebModule { }
