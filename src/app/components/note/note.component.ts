import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input("noteData") data: any = {};

  constructor() { }

  ngOnInit(): void {
    console.log('noteData -------> ', this.data);
  }

}
