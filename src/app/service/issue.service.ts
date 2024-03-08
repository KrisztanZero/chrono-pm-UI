import { Injectable } from '@angular/core';
import { Issue } from '../interface/issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  url = 'http://localhost:5221/api/issue';

  async getAllIssues(): Promise<Issue[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getIssueById(id: string): Promise<Issue | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
