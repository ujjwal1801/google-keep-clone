import { ADDNOTES, PINNOTE } from './actions';
import { tassign } from 'tassign';
export interface IAppState {
    notesList: Array<any>;
    theme: string;
}

export const INITIAL_STATE: IAppState = {
    notesList: JSON.parse(localStorage.getItem('notesList')),
    theme: 'light',
}

export function rootReducer(state: IAppState, action): IAppState{

    switch(action.type){
        case ADDNOTES:
            return tassign(state, { notesList: action.payload});
        case PINNOTE:
            // return tassign(state, { notesList: action.payload.notes, pinnedNotesList: action.payload.pinnedNotes})
            return tassign(state, { notesList: action.payload.notes })
        default:
            return state;
    }
}
