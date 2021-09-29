import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store';
import { NgRedux } from '@angular-redux/store';
import { MODAL } from 'src/app/actions';
import { BLANK_NOTE, NOTE } from 'src/app/interfaces/note.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>, private http: HttpService) { }
  isModalOpened: Observable<any>;
  noteData: Observable<any>;

  public noteToEdit: NOTE = BLANK_NOTE;

  ngOnInit(): void {
    this.isModalOpened = this.ngRedux.select('isModalOpened');
    this.ngRedux.subscribe(()=>this.noteToEdit = {...this.ngRedux.getState().noteToUpdate});
  }

  closeModal = () => {
    this.ngRedux.dispatch({ type: MODAL, payload: {note: {}, modalOpen: false}})
  }

  saveNote = () => {
    this.http.fnUpdateNote(this.noteToEdit);
    this.closeModal();
  }

}
