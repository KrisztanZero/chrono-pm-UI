import { Injectable } from '@angular/core';
import { IComment } from '../interface/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor() {}

  url = 'http://localhost:5221/api/comment';
  token = '';

  async getAllComment(): Promise<IComment[]> {
    try {
      const data = await fetch(this.url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      if (!data.ok) {
        throw new Error(`Failed to fetch comments: ${data.statusText}`);
      }
      return (await data.json()) ?? [];
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  }
  async getCommentById(id: string): Promise<IComment | undefined> {
    const data = await fetch(`${this.url}/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    return (await data.json()) ?? {};
  }
}
