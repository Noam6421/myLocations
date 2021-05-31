import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Card } from '@material-ui/core';

import Location from 'models/Location';
import StoreStateType from 'redux/storeStateType';
import { setSelectedCategory } from 'redux/SelectedCategory/selectedCategoryActionCreators';

import useStyles from './LocationsStyles';

const Locations: React.FC<Props> = (): JSX.Element => {
    
    const classes = useStyles();

    const locations = useSelector<StoreStateType, Location[]>(state => state.locations);
    const selectedCategory = useSelector<StoreStateType, string>(state => state.selectedCategory);
    //todo selected location
    return (
        <>
            <Grid 
                container 
                spacing={2} 
                direction='row' 
                justify='flex-start' 
                alignItems='flex-start' 
                className={classes.locationsSection}
            >
                <Grid item xs={12}>
                    <Typography variant='h5' className={classes.locationTitle}>Categories:</Typography>
                    { locations.length === 0 &&
                        <Typography variant='subtitle1'>
                            You don't have any locations yet, add your first location now by clicking the Add New Location button.
                        </Typography>
                    }
                </Grid>
                { locations.map((location) => {
                    return (
                        <Grid item xs={3} key={location.name}>
                            <Card 
                                onClick={() => setSelectedCategory(selectedCategory === location.name ? '' : location.name)} 
                                className={
                                    location.name === selectedCategory
                                    ? [classes.locationCard , classes.locationCardSelected].join(' ')
                                    : [classes.locationCard , classes.locationUnSelectedCard].join(' ')
                                }
                            >
                                {location.name}
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
};

interface Props {

};

export default Locations;