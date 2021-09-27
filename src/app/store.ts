import {ADDNOTES} from './actions';
import { tassign } from 'tassign';
export interface IAppState {
    notesList: Array<object>;
    theme: string;
}

export const INITIAL_STATE: IAppState = {
    notesList: [],
    theme: 'light'
}

export function rootReducer(state: IAppState, action): IAppState{
    switch(action.type){
        case ADDNOTES:
            let notes = state.notesList;
            notes.push(action.payload)
            return tassign(state, { notesList: notes})
    }
    return state;
}