import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid, MenuItem, TextField } from '@material-ui/core';

import Category from 'models/Category';
import ViewOptions from 'models/ViewOptions';
import StoreStateType from 'redux/storeStateType';
import { setFilter, setGroupBy, setSort } from 'redux/ViewOptions/viewOptionsActionCreators';

import useStyles from './ViewOptionsStylesBar';


const ViewOptionsBar = () => {
    
    const classes = useStyles();

    const categories = useSelector<StoreStateType, Category[]>(state => state.categories);
    const viewOptions = useSelector<StoreStateType, ViewOptions>(state => state.viewOptions);

    return (
        <Grid 
            container 
            spacing={2} 
            direction='row' 
            justify='flex-start' 
            alignItems='flex-start' 
        >
            <Grid item>
                <Button 
                    variant='outlined'
                    className={classes.viewOptionButton}
                    onClick={() => {viewOptions.sort === '' ? setSort('alphabetically') : setSort('')}}    
                >
                    Sort alphabetically
                </Button>
            </Grid>

            <Grid item>
                <Button 
                    variant='outlined'
                    className={classes.viewOptionButton}
                    onClick={() => {setGroupBy(!viewOptions.groupBy)}}
                >
                    Group By Category
                </Button>
            </Grid>

            <Grid item>
                <TextField
                    select
                    variant='outlined'
                    value={viewOptions.filter}
                    onChange={(e) => {setFilter(e.target.value as string)}}
                >
                    <MenuItem value={'All Categories'}> All Categories </MenuItem>
                    {categories.map((category) => 
                        <MenuItem key={category.name} value={category.name}>
                            {category.name}
                        </MenuItem>
                    )}
                </TextField>
            </Grid>   
        </Grid>
    )
};

export default ViewOptionsBar;