import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { note } from '../../interfaces/note';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-activeNote',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './active-note.component.html',
  styleUrl: './active-note.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ActiveNoteComponent {
  note = signal<note | undefined>(undefined)

  constructor(private NoteService: NoteService) {
    
  }

}
