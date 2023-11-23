import { Injectable } from '@angular/core';
import { note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})


export class NoteService {
  notes : note[] = [
    {title: "note 1", body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lectus lectus, commodo nec nunc et, eleifend suscipit lacus. Praesent iaculis ligula non massa mollis, id tristique enim eleifend. Suspendisse sagittis imperdiet ante, sed bibendum erat tincidunt ut. Vestibulum a convallis nisl, elementum vestibulum nisi. Pellentesque rutrum, tellus eget ullamcorper gravida, massa nulla vehicula lorem, sed volutpat nisl metus vitae massa. Curabitur tincidunt sit amet ex non interdum. Etiam vitae enim congue, dictum metus sit amet, condimentum felis. Nulla facilisi. Ut feugiat in enim sit amet pellentesque.", id: 0},
    {title: "note 2", body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lectus lectus, commodo nec nunc et, eleifend suscipit lacus. Praesent iaculis ligula non massa mollis, id tristique enim eleifend. Suspendisse sagittis imperdiet ante, sed bibendum erat tincidunt ut. Vestibulum a convallis nisl, elementum vestibulum nisi. Pellentesque rutrum, tellus eget ullamcorper gravida, massa nulla vehicula lorem, sed volutpat nisl metus vitae massa. Curabitur tincidunt sit amet ex non interdum. Etiam vitae enim congue, dictum metus sit amet, condimentum felis. Nulla facilisi. Ut feugiat in enim sit amet pellentesque.", id: 1},
    {title: "note 3", body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lectus lectus, commodo nec nunc et, eleifend suscipit lacus. Praesent iaculis ligula non massa mollis, id tristique enim eleifend. Suspendisse sagittis imperdiet ante, sed bibendum erat tincidunt ut. Vestibulum a convallis nisl, elementum vestibulum nisi. Pellentesque rutrum, tellus eget ullamcorper gravida, massa nulla vehicula lorem, sed volutpat nisl metus vitae massa. Curabitur tincidunt sit amet ex non interdum. Etiam vitae enim congue, dictum metus sit amet, condimentum felis. Nulla facilisi. Ut feugiat in enim sit amet pellentesque.", id: 2},
    {title: "note 4", body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lectus lectus, commodo nec nunc et, eleifend suscipit lacus. Praesent iaculis ligula non massa mollis, id tristique enim eleifend. Suspendisse sagittis imperdiet ante, sed bibendum erat tincidunt ut. Vestibulum a convallis nisl, elementum vestibulum nisi. Pellentesque rutrum, tellus eget ullamcorper gravida, massa nulla vehicula lorem, sed volutpat nisl metus vitae massa. Curabitur tincidunt sit amet ex non interdum. Etiam vitae enim congue, dictum metus sit amet, condimentum felis. Nulla facilisi. Ut feugiat in enim sit amet pellentesque.", id: 3},
  ]
  activeNote: number | undefined;

  constructor() { }

  getNotes = () : note[] => {
    return this.notes;
  }

  settActiveNote = (id: number) => {
    this.activeNote = id;
    console.log(this.activeNote);
    
  }
}



