import { Component, inject } from '@angular/core';
import { Issue } from '../../interface/issue';
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
  issue: Issue | undefined;
  issueService: IssueService = inject(IssueService);

  constructor() {
    console.log(`Route details:`);
    console.log(this.route);
    console.log(
      `Route parameters:\n ${JSON.stringify(
        this.route.snapshot.params,
        null,
        2
      )}`
    );
    console.log(`Route URL:\n ${this.route.snapshot.url.join('/')}`);

    const issueId = this.route.snapshot.params['id'];
    console.log(`Issue ID: \n ${issueId}`);
    this.issueService.getIssueById(issueId).then((issue) => {
      this.issue = issue;
      console.log(`Issue details:\n ${JSON.stringify(this.issue, null, 2)}`);
    });
  }
}
