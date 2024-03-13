import { Component, inject } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IUser } from '../../interface/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    UserCardComponent,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {
  users: IUser[] = [];
  filteredUsers: IUser[] = [];

  userService: UserService = inject(UserService);

  constructor() {
    this.userService.getAllUser().then((users: IUser[]) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredUsers = this.users;
      return;
    }

    this.filteredUsers = this.users.filter((user) =>
      user?.username.toLowerCase().includes(text.toLowerCase())
    );
  }

  clearInput(inputElement: HTMLInputElement) {
    inputElement.value = '';
  }
}
