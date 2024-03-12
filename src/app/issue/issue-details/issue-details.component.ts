import { Component, inject } from '@angular/core';
import { IIssue } from '../../interface/issue';
import { IssueService } from '../../service/issue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue-details',
  standalone: true,
  imports: [],
  templateUrl: './issue-details.component.html',
  styleUrl: './issue-details.component.scss',
})
export class IssueDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  issue: IIssue | undefined;
  issueService: IssueService = inject(IssueService);

  constructor() {

    const issueId = this.route.snapshot.params['id'];
    this.issueService.getIssueById(issueId).then((issue) => {
      this.issue = issue;
    });
  }
}
