import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private authService: AuthorizationService,
  ) { }

  ngOnInit() {
    this.redirectMainPage();
  }

  private redirectMainPage() {
    this.authService.redirectMainPage();
  }

}
