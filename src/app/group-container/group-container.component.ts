import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Group, Note, NoteStatus} from "../../models/models";
import {MatDialog} from "@angular/material/dialog";
import {GroupCreationComponent} from "../group-creation/group-creation.component";
@Component({
  selector: 'app-group-container',
  templateUrl: './group-container.component.html',
  styleUrls: ['./group-container.component.css']
})
export class GroupContainerComponent implements OnInit {

  note: Note = {title: 'Note 1', creationDate: new Date(),
    expiryDate: new Date(),
    content: 'Content 1',
    status: NoteStatus.inProgress};
  note2: Note = {title: 'Note 1',
    creationDate: new Date(),
    expiryDate: new Date(),
    content: 'Content 1',
    status: NoteStatus.finished};


  groups: Group[] = [{groupId: 1, title: "Shopping", notes: [this.note, this.note2]}];

  @Output() groupSelected = new EventEmitter();

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  selectGroup(group: Group) {
    this.groupSelected.emit(group);
  }

  getAmountOfNotes(group: Group): number {
    return group.notes.length;
  }

  hasOpenTasks(group: Group): boolean {
    for(let note of group.notes) {
      if(note.status == NoteStatus.inProgress) {
        return true;
      }
    }
    return false;
  }
  calculatePercentage(group: Group): number {
    let tasksFinished = group.notes.filter(note => note.status == NoteStatus.finished).length;
    if(tasksFinished == 0) {
      return 0;
    }
    return Math.round((group.notes.length - tasksFinished) / group.notes.length * 100);
  }

  createNewNote() {
      this.matDialog.open(GroupCreationComponent);
  }

}
