import Category from 'models/Category';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';

interface SetCategories {
    type: typeof SET_CATEGORIES,
    payload: { categories: Category[] }
};

interface CreateCategory {
    type: typeof CREATE_CATEGORY,
    payload: { category: Category }
};

export type CategoriesAction = SetCategories | CreateCategory;