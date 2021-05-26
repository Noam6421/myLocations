import Category from 'models/Category';

export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

interface SetSelectedCategory {
    type: typeof SET_SELECTED_CATEGORY,
    payload: { category: Category }
};

export type SelectedCategoryAction = SetSelectedCategory;