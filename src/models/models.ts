export enum NoteStatus {
  inProgress,
  finished,
  Left,
  Right,
}


export interface Group {
  title: string;
  groupId: number;
  notes: Note[];
}

export interface Note {
  title: string;
  creationDate: Date;
  expiryDate: Date;
  content: string;
  status: NoteStatus
}
