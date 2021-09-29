import { ADDNOTES, ARCHIVE, CATEGORY, MODAL, UPDATE_NOTE, SEARCH, DEFAULT, SWITCH_THEME, TRASH } from './actions';
import { tassign } from 'tassign';
export interface IAppState {
    masterNotesList: Array<any>;
    notesList: Array<any>;
    theme: string;
    isModalOpened: boolean;
    noteToUpdate: any;
    category: string;
}

export const INITIAL_STATE: IAppState = {
    masterNotesList: JSON.parse(localStorage.getItem('masterNotesList')),
    notesList: JSON.parse(localStorage.getItem('masterNotesList'))?.filter(note=>note.noteCategory === DEFAULT),
    theme: localStorage.getItem('theme') || 'light-theme',
    isModalOpened: false,
    noteToUpdate: {},
    category: 'DEFAULT'
}

export function rootReducer(state: IAppState, action): IAppState{

    switch(action.type){
        case ADDNOTES:
            return tassign(state, { notesList: action.payload.notesList, masterNotesList: action.payload.masterNotesList});
        case UPDATE_NOTE:
            return tassign(state, { notesList: action.payload });
        case TRASH:
            return tassign(state, { notesList: action.payload.notesList, masterNotesList: action.payload.masterNotesList});
        case MODAL:
            return tassign(state, { noteToUpdate: action.payload.note, isModalOpened: action.payload.modalOpen });
        case SEARCH:
            return tassign(state, { notesList: action.payload});
        case ARCHIVE:
            return tassign(state, { notesList: action.payload.notesList, masterNotesList: action.payload.masterNotesList});
        case CATEGORY:
            return tassign(state, { category: action.payload.category, notesList: action.payload.notesList});
        case SWITCH_THEME:
            return tassign(state, { theme: action.payload});
        default:
            return state;
    }
}
