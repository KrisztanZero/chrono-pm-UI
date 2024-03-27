import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IProject } from '../../interface/project';
import { ProjectService } from '../../service/project.service';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    ProjectCardComponent,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  projects: IProject[] = [];
  filteredProjects: IProject[] = [];


  projectService: ProjectService = inject(ProjectService);

  constructor() {
    this.projectService.getAllProjects().then((projects: IProject[]) => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProjects = this.projects;
      return;
    }

    this.filteredProjects = this.projects.filter((project) =>
      project?.projectName.toLowerCase().includes(text.toLowerCase())
    );
  }

  clearInput(inputElement: HTMLInputElement) {
    inputElement.value = '';
  }
}
