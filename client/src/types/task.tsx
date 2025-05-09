export enum TaskStatus {
    Pending = "pending",
    InProgress = "in-progress",
    Completed = "completed",
}
export interface Task {
    id: number,
    name: string,
    content: string,
    status: TaskStatus
}