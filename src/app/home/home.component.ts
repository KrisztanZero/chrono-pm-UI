import { Component, inject } from '@angular/core';
import { IAppDetails } from '../interface/appDetails';
import { AppDetailsService } from '../service/app-details.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  appDetails: IAppDetails | undefined;
  appDetailsService: AppDetailsService = inject(AppDetailsService);

  constructor() {
    this.appDetailsService.getAppDetailsById("362919f6-2357-4c71-b917-f68fdb0da91d")
      .then((appDetails) => {
        this.appDetails = appDetails;
      });
  }
}
