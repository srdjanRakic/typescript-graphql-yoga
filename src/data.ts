export interface ProjectData {
  id: number;
  name: string;
}

export interface TaskData {
  id: number;
  title: string;
  completed: boolean;
  projectId: number;
}

export const projects: ProjectData[] = [
  { id: 1, name: "Learn React Native" },
  { id: 2, name: "Workout" },
  { id: 3, name: "Buy Groceries" }
];

export const tasks: TaskData[] = [
  { id: 1, title: "Install Node", completed: true, projectId: 1 },
  {
    id: 2,
    title: "Install React Native CLI:",
    completed: false,
    projectId: 1,
  },
  { id: 3, title: "Install Xcode", completed: false, projectId: 1 },
  { id: 4, title: "Morning Jog", completed: true, projectId: 2 },
  { id: 5, title: "Hit the gym", completed: false, projectId: 2 },
  { id: 6, title: "Buy egges", completed: false, projectId: 3 },
  { id: 7, title: "Buy chicken", completed: true, projectId: 3 },
  { id: 8, title: "Buy BBQ sauce", completed: false, projectId: 3 },
];
