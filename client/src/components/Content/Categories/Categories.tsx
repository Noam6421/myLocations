import React from 'react';
import { useSelector } from 'react-redux';

import Category from 'models/Category';
import StoreStateType from 'redux/storeStateType';

const Categories: React.FC<Props> = (): JSX.Element => {

    const categories = useSelector<StoreStateType, Category[]>(state => state.categories)

    console.log(categories);
    return (
        <p>Categories</p>
    )
}

interface Props {

};

export default Categories;