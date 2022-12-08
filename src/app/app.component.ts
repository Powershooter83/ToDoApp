import { Component } from '@angular/core';
import {Group} from "../models/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  selectedGroup: Group = {title: 'Group 1', groupId: 1, notes: []};

  selectGroup(group: Group) {
    this.selectedGroup = group;
  }

}
