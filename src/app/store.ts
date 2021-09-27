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

    let notes = state.notesList || [];
    let pinnedNotes = state.pinnedNotesList || [];

    switch(action.type){
        case ADDNOTES:
            console.log('state -------> ', state);
            if(action.payload.title || action.payload.text) {
                action.payload._id = generateNoteID(state)
                notes.push(action.payload);
                localStorage.setItem('notesList', JSON.stringify(notes));
                return tassign(state, { notesList: notes })
            }
            break;
        case PINNOTE:
            if(action.payload.note.isPinned){
                notes.splice(notes.findIndex(note=>note._id === action.payload.note._id), 1);
                pinnedNotes.push(action.payload.note);
            }
            else{ 
                pinnedNotes.splice(pinnedNotes.findIndex(note=>note._id === action.payload.note._id), 1);
                notes.push(action.payload.note);
            }
            localStorage.setItem('notesList', JSON.stringify(notes));
            localStorage.setItem('pinnedNotesList', JSON.stringify(pinnedNotes));
            return tassign(state, { notesList: notes, pinnedNotesList: pinnedNotes})

    }
    return state;
}

function generateNoteID(state): number{
    let id = Math.floor(Math.random() * (10000 - 1) ) + 1;
    while(state.notesList && state.notesList.find(note=>note._id === id)){ 
        id = Math.floor(Math.random() * (10000 - 1) ) + 1;
    }
    return id;
}