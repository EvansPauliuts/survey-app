export interface Size {
    wd: string;
    hg: string;
}

export interface Emodji {
    label?: string | null;
    symbol?: any | null;
}

export interface NewItemData {
    answers: {
        q1: string | null;
        q2: string | null;
        q3: string | null;
        q4: string | null;
    },
    datetime: string | null;
    name: string | null;
}

export interface ListItem {
    name: string | null;
    answers: {
        q1: string | null;
        q2: string | null;
        q3: string | null;
        q4: string | null;
    }
}