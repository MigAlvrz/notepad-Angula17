import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { note } from '../../interfaces/note';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoteComponent {
  @Input() noteData: note = {title: '', body: '', id: 0}
  note = signal<note>({title: '', body: '', id:0})
  maxLength: number = 250


  constructor(private NoteService: NoteService) {}

  ngOnInit() {
    this.shortText();
    this.note.set(this.noteData)
  }

  shortText = () => {
    if (this.noteData.body.length <= this.maxLength) {
      return ;
    }
  
    this.noteData.body = this.noteData.body.substring(0, this.maxLength)+ "...";
  }

  setActiveNote = () => {
    this.NoteService.settActiveNote(this.note().id)
  }
}
