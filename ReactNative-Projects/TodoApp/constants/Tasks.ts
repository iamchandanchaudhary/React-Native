export type TaskStatus = "Done" | "In Progress" | "To-do";

export type TaskIcon = {
    name: string;
    backgroundColor: string;
};

export type Task = {
    id: string;
    category: string;
    title: string;
    time: string;
    status: TaskStatus;
    icon: TaskIcon;
};

export const TASKS: Task[] = [
    {
        id: "1",
        category: "Study",
        title: "Revise Today's Lecture Notes",
        time: "10:30 AM",
        status: "Done",
        icon: { name: "grid", backgroundColor: "#FF6B8A" },
    },
    {
        id: "2",
        category: "Coding",
        title: "Solve 2 Coding Problems on LeetCode",
        time: "12:00 PM",
        status: "In Progress",
        icon: { name: "grid", backgroundColor: "#FF6B8A" },
    },
    {
        id: "3",
        category: "Data Structures and Algorithms",
        title: "Read the Concepts of DSA",
        time: "07:15 PM",
        status: "To-do",
        icon: { name: "arrow-down-circle", backgroundColor: "#c61ed8" },
    },
    {
        id: "4",
        category: "GitHub",
        title: "Make a Meaningful Commit",
        time: "09:00 PM",
        status: "To-do",
        icon: { name: "bookmark", backgroundColor: "#FBBF24" },
    },
    {
        id: "5",
        category: "Study Book",
        title: "Learn One New Technical Concept",
        time: "11:00 PM",
        status: "In Progress",
        icon: { name: "book", backgroundColor: "#006eff" },
    },
];

export const FILTER_OPTIONS = [
    "All",
    "To do",
    "In Progress",
    "Completed",
] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];