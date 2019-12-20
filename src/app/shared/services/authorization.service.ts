import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebUrlConstant } from '../constants/url.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private router: Router,
  ) { }

  redirectMainPage() {
    return this.router.navigate([WebUrlConstant.MAIN_PAGE.ANONYMOUS])
  }
}
