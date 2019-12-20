import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../core/layout/layout.component';
import { TravelsComponent } from './travels/travels.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { BookReviewComponent } from './books/book-review/book-review.component';
import { MainComponent } from './main/main.component';

const routes: Routes =  [
  {
    path: 'main',
    component: MainComponent,
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
    ]
  }
];

@NgModule({
  declarations: [TravelsComponent, PersonnelComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WebModule { }
