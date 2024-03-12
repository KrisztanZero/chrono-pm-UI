import { Component, Input } from '@angular/core';
import { IIssue } from '../../interface/issue';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-issue-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './issue-card.component.html',
  styleUrl: './issue-card.component.scss',
})
export class IssueCardComponent {
  @Input() issue!: IIssue;
}
