import Category from 'models/Category';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

interface SetCategories {
    type: typeof SET_CATEGORIES,
    payload: { categories: Category[] }
};

interface CreateCategory {
    type: typeof CREATE_CATEGORY,
    payload: { category: Category }
};

interface EditCategory {
    type: typeof EDIT_CATEGORY,
    payload: { category: Category, newName: string }
};

interface DeleteCategory {
    type: typeof DELETE_CATEGORY,
    payload: { category: Category }
};

export type CategoriesAction = SetCategories | CreateCategory | EditCategory | DeleteCategory;