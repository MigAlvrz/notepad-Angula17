import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NoteListComponent } from "./note-list/note-list.component";
import { NoteComponent } from './note/note.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ActiveNoteComponent } from './active-note/active-note.component';

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [HttpClientModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, HttpClientModule, MatSlideToggleModule, NoteListComponent, NoteComponent, ActiveNoteComponent, MatCardModule, MatButtonModule]
})
export class AppComponent {
  title = 'notepad-Angular17';
}
