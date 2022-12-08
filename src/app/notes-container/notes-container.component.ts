import {Component, Input, OnInit} from '@angular/core';
import {Group} from "../../models/models";

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {

  @Input() selectedGroup?: Group;

  constructor() { }

  ngOnInit(): void {
  }

}
