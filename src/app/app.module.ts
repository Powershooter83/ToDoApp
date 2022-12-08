import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { GroupContainerComponent } from './group-container/group-container.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GroupCreationComponent } from './group-creation/group-creation.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NotesContainerComponent,
    GroupContainerComponent,
    HeaderComponent,
    GroupCreationComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
