export interface NOTE {
    _id: number;
    title: string,
    text: string,
    isPinned: boolean,
    isArchived: boolean,
}

export const BLANK_NOTE:NOTE = {
    _id: null,
    title: '',
    text: '',
    isPinned: false,
    isArchived: false,
}