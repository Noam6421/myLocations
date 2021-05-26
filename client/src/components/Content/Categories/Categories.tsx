import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Card } from '@material-ui/core';

import Category from 'models/Category';
import StoreStateType from 'redux/storeStateType';
import { setSelectedCategory } from 'redux/SelectedCategory/selectedCategoryActionCreators';

import useStyles from './CategoriesStyles';

const Categories: React.FC<Props> = (): JSX.Element => {
    
    const classes = useStyles();

    const categories = useSelector<StoreStateType, Category[]>(state => state.categories);
    const selectedCategory = useSelector<StoreStateType, string>(state => state.selectedCategory);

    return (
        <>
            <Grid 
                container 
                spacing={2} 
                direction='row' 
                justify='flex-start' 
                alignItems='flex-start' 
                className={classes.categoriesSection}
            >
                <Grid item xs={12}>
                    <Typography>Categories:</Typography>
                </Grid>
                {
                    categories.map((category) => {
                        return (
                            <Grid item xs={3} key={category.name}>
                                <Card 
                                    onClick={() => setSelectedCategory(selectedCategory === category.name ? '' : category.name)} 
                                    className={
                                        category.name === selectedCategory
                                        ? classes.categoryCardSelected
                                        : classes.categoryCard
                                    }
                                >
                                    {category.name}
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

interface Props {

};

export default Categories;