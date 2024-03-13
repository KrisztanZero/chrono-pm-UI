import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IComment } from '../../interface/comment';
import { CommentService } from '../../service/comment.service';
import { CommentCardComponent } from '../comment-card/comment-card.component';

@Component({
  selector: 'app-comment-page',
  standalone: true,
  imports: [
    CommentCardComponent,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './comment-page.component.html',
  styleUrl: './comment-page.component.scss',
})
export class CommentPageComponent {
  comments: IComment[] = [];
  filteredComments: IComment[] = [];

  commentService: CommentService = inject(CommentService);

  constructor() {
    this.commentService.getAllComment().then((comments: IComment[]) => {
      this.comments = comments;
      this.filteredComments = comments;
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredComments = this.comments;
      return;
    }

    this.filteredComments = this.comments.filter((comment) =>
      comment?.authorId.includes(text));
  }

  clearInput(inputElement: HTMLInputElement) {
    inputElement.value = '';
  }
}
