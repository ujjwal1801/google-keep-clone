import { ADDNOTES, ARCHIVE, MODAL, PINNOTE, SEARCH } from './actions';
import { tassign } from 'tassign';
import { ComponentFixture } from '@angular/core/testing';
export interface IAppState {
    masterNotesList: Array<any>;
    notesList: Array<any>;
    theme: string;
    isModalOpened: boolean;
    noteToUpdate: any;
}

export const INITIAL_STATE: IAppState = {
    masterNotesList: JSON.parse(localStorage.getItem('notesList')),
    notesList: JSON.parse(localStorage.getItem('notesList')),
    theme: 'light',
    isModalOpened: false,
    noteToUpdate: {}
}

export function rootReducer(state: IAppState, action): IAppState{

    switch(action.type){
        case ADDNOTES:
            return tassign(state, { notesList: action.payload});
        case PINNOTE:
            return tassign(state, { notesList: action.payload });
        case MODAL:
            return tassign(state, { noteToUpdate: action.payload.note, isModalOpened: action.payload.modalOpen });
        case SEARCH:
            return tassign(state, { notesList: action.payload});
        case ARCHIVE:
            return tassign(state, { notesList: action.payload})
        default:
            return state;
    }
}
