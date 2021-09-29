export interface NOTE {
    _id: number;
    title: string,
    text: string,
    isPinned: boolean,
    noteCategory: string,
}

export const BLANK_NOTE:NOTE = {
    _id: null,
    title: '',
    text: '',
    isPinned: false,
    noteCategory: 'DEFAULT',
}