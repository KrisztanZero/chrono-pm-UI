import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { IComment } from '../../interface/comment';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-comment-details',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatListModule],
  templateUrl: './comment-details.component.html',
  styleUrl: './comment-details.component.scss',
})
export class CommentDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  comment: IComment | undefined;
  commentService: CommentService = inject(CommentService);

  constructor() {
    const commentId = this.route.snapshot.params['id'];
    this.commentService.getCommentById(commentId).then((comment) => {
      this.comment = comment;
    });
  }
}
