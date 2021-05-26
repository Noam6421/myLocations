import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Card } from '@material-ui/core';

import Category from 'models/Category';
import StoreStateType from 'redux/storeStateType';

import useStyles from './CategoriesStyles';
import { Link } from 'react-router-dom';
import { indexRoute } from 'Utils/Routes/Routes';

const Categories: React.FC<Props> = (): JSX.Element => {
    
    const classes = useStyles();

    const categories = useSelector<StoreStateType, Category[]>(state => state.categories)

    console.log(categories);
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
                                <Link to={indexRoute} className={classes.categoryLink}>
                                    <Card className={classes.categoryCard}>{category.name}</Card>
                                </Link>
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