export interface IProject {
  id: string;
  authorId: string;
  noteId: string;
  projectName: string;
  summary: string;
  description: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: string;
  originalEstimate: string;
  remainingEstimte: string;
  assigneeIds: [];
  issueIds: [];
}
