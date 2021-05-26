export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

interface SetSelectedCategory {
    type: typeof SET_SELECTED_CATEGORY,
    payload: { categoryName: string }
};

export type SelectedCategoryAction = SetSelectedCategory;