import { Timestamp } from "firebase/firestore";

export interface Size {
    left: number;
    right: number;
}

export interface Note {
    id: string;
    createdDate: Timestamp;
    title: string;
    content: string;
}

export interface Account {
    userID: string;
    notes: Note[];
}