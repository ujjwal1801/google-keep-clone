import { ADDNOTES, PINNOTE } from './actions';
import { tassign } from 'tassign';
export interface IAppState {
    notesList: Array<any>;
    theme: string;
    pinnedNotesList: Array<any>;
}

export const INITIAL_STATE: IAppState = {
    notesList: JSON.parse(localStorage.getItem('notesList')),
    theme: 'light',
    pinnedNotesList: JSON.parse(localStorage.getItem('pinnedNotesList'))
}

export function rootReducer(state: IAppState, action): IAppState{

    switch(action.type){
        case ADDNOTES:
            return tassign(state, { notesList: action.payload});
        case PINNOTE:
            return tassign(state, { notesList: action.payload.notes, pinnedNotesList: action.payload.pinnedNotes})
        default:
            return state;
    }
}
