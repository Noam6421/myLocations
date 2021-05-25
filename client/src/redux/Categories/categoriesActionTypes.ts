import Category from 'models/Category';

export const SET_CATEGORIES = 'SET_CATEGORIES';

interface SetCategories {
    type: typeof SET_CATEGORIES,
    payload: { categories: Category[] }
};

export type CategoriesAction = SetCategories;