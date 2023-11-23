import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { note } from '../../interfaces/note';
import { ActiveNoteComponent } from "../active-note/active-note.component";
import { NoteComponent } from '../note/note.component';

@Component({
    selector: 'NoteList',
    standalone: true,
    templateUrl: './note-list.component.html',
    styleUrl: './note-list.component.scss',
    imports: [CommonModule, ActiveNoteComponent, NoteComponent]
})
export class NoteListComponent {
  notes = signal<note[]>([])


  constructor(private NoteService: NoteService) {}

  ngOnInit() {
    this.getNotes();
    
  }

  getNotes = () => {
    this.notes.set(this.NoteService.getNotes())
  }
}
