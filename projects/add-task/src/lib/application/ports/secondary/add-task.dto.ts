export interface AddTaskDTO {
  readonly id: string;
  readonly task: string;
  readonly isChecked: boolean;
  readonly order: number;
}
