import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  submitLogin(email: string, password: string) {
    console.log(`Chrono PM received: email: ${email}, password: ${password}.`);
  }

  submitRegister(email: string, password: string) {
    console.log(`Chrono PM received: email: ${email}, password: ${password}.`);
  }
}
