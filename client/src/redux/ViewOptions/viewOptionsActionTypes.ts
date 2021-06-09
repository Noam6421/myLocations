
export const SET_SORT = 'SET_SORT';
export const SET_GROUP_BY = 'SET_GROUP_BY';
export const SET_FILTER = 'SET_FILTER';

interface SetSort {
    type: typeof SET_SORT,
    payload: string
};

interface SetGroupBy {
    type: typeof SET_GROUP_BY,
    payload: boolean
};

interface SetFilter {
    type: typeof SET_FILTER,
    payload: string
};

export type ViewOptionsAction = SetSort | SetGroupBy | SetFilter;