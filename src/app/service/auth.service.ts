import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  submitApplication(email: string, password: string) {
    console.log(`Chrono PM received: email: ${email}, password: ${password}.`);
  }
}
