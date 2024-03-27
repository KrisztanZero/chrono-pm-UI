import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { IProject } from '../../interface/project';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatListModule,
    MatSelectModule,
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  project: IProject | undefined;
  projectService: ProjectService = inject(ProjectService);

  constructor() {
    const projectId = this.route.snapshot.params['id'];
    this.projectService.getProjectById(projectId).then((project) => {
      this.project = project;
    });
  }
}
