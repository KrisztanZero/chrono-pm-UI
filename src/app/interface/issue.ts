export interface IIssue {
  id: string;
  projectId: string;
  title: string;
  type: string;
  priority: string;
  summary: string;
  description: string;
  dueDateTime: Date;
  createdAt: Date;
  updatedAt: Date;
  originalEstimate: number;
  remainingEstimate: number;
  authorId: string;
  assigneeIds: [];
  commentIds: [];
}
