import Category from 'models/Category';
import Location from 'models/Location';
import ViewOptions from 'models/ViewOptions';

export default interface StoreStateType {
    categories: Category[];
    selectedCategory: string;
    locations: Location[];
    selectedLocation: Location;
    viewOptions: ViewOptions;
};