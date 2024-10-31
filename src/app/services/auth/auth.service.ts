// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.isLoggedInStatus = true;
      localStorage.setItem('FusionisLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInStatus = false;
    localStorage.removeItem('FusionisLoggedIn');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('FusionisLoggedIn') === 'true';
  }
}