import { Injectable } from '@angular/core';
import { IProject } from '../interface/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  url = 'http://localhost:5221/api/project';
  token = '';

  async getAllProjects(): Promise<IProject[]> {
    try {
      const data = await fetch(this.url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      if (!data.ok) {
        throw new Error(`Failed to fetch projects: ${data.statusText}`);
      }
      return (await data.json()) ?? [];
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  }
  async getProjectById(id: string): Promise<IProject | undefined> {
    const data = await fetch(`${this.url}/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    return (await data.json()) ?? {};
  }
}
