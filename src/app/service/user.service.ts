import { Injectable } from '@angular/core';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  url = 'http://localhost:5221/api/user';
  token = '';

  async getAllUser(): Promise<IUser[]> {
    try {
      const data = await fetch(this.url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      if (!data.ok) {
        throw new Error(`Failed to fetch users: ${data.statusText}`);
      }
      return (await data.json()) ?? [];
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
  async getUserById(id: string): Promise<IUser | undefined> {
    const data = await fetch(`${this.url}/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    return (await data.json()) ?? {};
  }
}
