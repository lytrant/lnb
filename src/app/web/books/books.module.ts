import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookGalleryComponent } from './book-gallery/book-gallery.component';
import { Routes, RouterModule } from '@angular/router';
import { BookReviewComponent } from './book-review/book-review.component';

const routes: Routes = [
  {
    path: 'book-gallery',
    component: BookGalleryComponent
  },
  {
    path: 'book-review',
    component: BookReviewComponent
  }
];

@NgModule({
  declarations: [BookGalleryComponent, BookReviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BooksModule { }
