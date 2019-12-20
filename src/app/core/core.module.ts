import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material'



@NgModule({
  declarations: [
    LayoutComponent,
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    LayoutComponent,
    TopBarComponent,
    MatIconModule
  ]
})
export class CoreModule { }
