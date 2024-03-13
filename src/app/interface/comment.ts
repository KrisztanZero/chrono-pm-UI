export interface IComment {
    id: string;
    summary: string;
    content: string;
    createdAt: Date;
    authorId: string;
    issueId: string;
}