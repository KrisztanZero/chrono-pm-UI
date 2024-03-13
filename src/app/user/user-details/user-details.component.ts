import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interface/auth.models';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [[MatButtonModule, MatCardModule, MatListModule], MatSelectModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  user: IUser | undefined;
  userService: UserService = inject(UserService);

  constructor() {
    const userId = this.route.snapshot.params['id'];
    this.userService.getUserById(userId)
      .then(user => this.user = user);
  }
}
