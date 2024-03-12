import { Component, inject } from '@angular/core';
import { IssueCardComponent } from '../issue-card/issue-card.component';
import { IIssue } from '../../interface/issue';
import { IssueService } from '../../service/issue.service';

@Component({
  selector: 'app-issue-page',
  standalone: true,
  imports: [IssueCardComponent],
  templateUrl: './issue-page.component.html',
  styleUrl: './issue-page.component.scss',
})
export class IssuePageComponent {
  issues: IIssue[] = [];
  filteredIssues: IIssue[] = [];

  issueService: IssueService = inject(IssueService);

  constructor() {
    this.issueService.getAllIssues().then((issues: IIssue[]) => {
      this.issues = issues;
      this.filteredIssues = issues;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredIssues = this.issues;
      return;
    }

    this.filteredIssues = this.issues.filter((issue) =>
      issue?.title.toLowerCase().includes(text.toLowerCase())
    );
  }
}
