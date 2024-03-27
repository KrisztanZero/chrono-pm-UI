import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { IAppDetails } from '../interface/appDetails';
import { AppDetailsService } from '../service/app-details.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  appDetails: IAppDetails | undefined;
  appDetailsService: AppDetailsService = inject(AppDetailsService);

  constructor() {
    this.appDetailsService
      .getAppDetailsById('362919f6-2357-4c71-b917-f68fdb0da91d')
      .then((appDetails) => {
        this.appDetails = appDetails;
      });
  }
}
