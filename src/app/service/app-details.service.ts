import { Injectable } from '@angular/core';
import { IAppDetails } from '../interface/appDetails';

@Injectable({
  providedIn: 'root',
})
export class AppDetailsService {
  constructor() {}

  url = 'http://localhost:5221/api/appDetails';
  token = '';

  async getAllAppDetails(): Promise<IAppDetails[]> {
    try {
      const data = await fetch(this.url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      if (!data.ok) {
        throw new Error(
          `Failed to fetch  app details list: ${data.statusText}`
        );
      }
      return (await data.json()) ?? [];
    } catch (error) {
      console.error('Error fetching app details list:', error);
      return [];
    }
  }
  async getAppDetailsById(id: string): Promise<IAppDetails | undefined> {
    const data = await fetch(`${this.url}/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    return (await data.json()) ?? {};
  }
}
