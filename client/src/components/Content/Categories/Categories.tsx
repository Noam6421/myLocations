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
                    <Typography variant='h5' className={classes.categoryTitle}>Categories:</Typography>
                    { categories.length === 0 &&
                        <Typography variant='subtitle1'>
                            You don't have any categories yet, add your first category now by clicking the Add New Category button.
                        </Typography>
                    }
                </Grid>
                { categories.map((category) => {
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
                })}
            </Grid>
        </>
    )
}

interface Props {

};

export default Categories;