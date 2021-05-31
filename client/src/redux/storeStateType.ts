import Category from 'models/Category';
import Location from 'models/Location';

export default interface StoreStateType {
    categories: Category[];
    selectedCategory: string;
    locations: Location[];
};