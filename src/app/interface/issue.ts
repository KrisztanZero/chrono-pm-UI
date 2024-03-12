export interface IIssue {
  id: string;
  title: string;
  project: string;
  type: string;
  priority: string;
  summary: string;
  description: string;
  dueDateTime: Date;
  createdAt: Date;
  originalEstimate: number;
  remainingEstimate: number;
  authorId: string;
  assigneeIds: [];
  commentIds: [];
}
