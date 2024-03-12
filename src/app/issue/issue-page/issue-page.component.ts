import { Component, inject } from '@angular/core';
import { IssueCardComponent } from '../issue-card/issue-card.component';
import { IIssue } from '../../interface/issue';
import { IssueService } from '../../service/issue.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-issue-page',
  standalone: true,
  imports: [
    IssueCardComponent,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
  ],
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

  clearInput(inputElement: HTMLInputElement) {
    inputElement.value = '';
  }
}
