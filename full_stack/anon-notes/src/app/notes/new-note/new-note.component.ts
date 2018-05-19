import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  note: Note = new Note();
  constructor() {
  }

  ngOnInit() {
  }

  submitHandler(event) {
    //prevent form submission
    event.preventDefault();
    //add the time the note was created
    this.note.timestamp = new Date();
    //call service to add note locally (to be changed to Mongo in the future)

    //reset note
    this.note = new Note();
  }

}
