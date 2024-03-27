export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phoneNumber: string;
  updatedAt: Date;
  issueIds: [];
  commentIds: [];
}
