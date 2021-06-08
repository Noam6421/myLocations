import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Card } from '@material-ui/core';

import ViewOptions from 'models/ViewOptions';
import StoreStateType from 'redux/storeStateType';
import Location, { initalSelectedLocation } from 'models/Location';
import { setSelectedLocation } from 'redux/SelectedLocation/selectedLocationActionCreators';

import useStyles from './LocationsStyles';
import ViewOptionsBar from './ViewOptions/ViewOptionsBar';

const Locations: React.FC<Props> = (): JSX.Element => {
    
    const classes = useStyles();

    const locations = useSelector<StoreStateType, Location[]>(state => state.locations);
    const selectedLocation = useSelector<StoreStateType, Location>(state => state.selectedLocation);
    const viewOptions = useSelector<StoreStateType, ViewOptions>(state => state.viewOptions);

    
    const filteredLocations = locations.filter((location) => {
        return viewOptions.filter === 'All Categories' ? true : location.category === viewOptions.filter;
    });
    
    const viewLocations = viewOptions.sort === 'alphabetically' 
    ? filteredLocations.sort((a,b) => a.name.localeCompare(b.name))
    : filteredLocations;
    
    const locationsGroupedByCategory = _.groupBy(viewLocations, 'category'.toString())

        console.log(locationsGroupedByCategory)
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
                    <Typography variant='h5' className={classes.locationTitle}>Locations:</Typography>
                    { locations.length === 0 &&
                        <Typography variant='subtitle1'>
                            You don't have any locations yet, add your first location now by clicking the Add New Location button.
                        </Typography>
                    }
                </Grid>

                <Grid item xs={12}>
                    <ViewOptionsBar />
                </Grid>
                {viewOptions.groupBy ?
                    Object.keys(locationsGroupedByCategory).map((key) => 
                    <Grid item container xs={12} direction='column' spacing={1}>
                        <Typography variant='h6'>{key}</Typography>
                           {locationsGroupedByCategory[key].map((locationItem: Location) =>
                            <Grid item xs={3} key={locationItem.name}>
                                <Card 
                                    onClick={() => setSelectedLocation(selectedLocation.name === locationItem.name ? initalSelectedLocation : locationItem)} 
                                    className={
                                        locationItem.name === selectedLocation.name
                                        ? [classes.locationCard , classes.locationCardSelected].join(' ')
                                        : [classes.locationCard , classes.locationUnSelectedCard].join(' ')
                                    }
                                >
                                    {locationItem.name}
                                </Card>
                            </Grid>
                        )} 
                    </Grid>       
                    )
                : viewLocations.map((location) => {
                    return (
                        <Grid item xs={3} key={location.name}>
                            <Card 
                                onClick={() => setSelectedLocation(selectedLocation.name === location.name ? initalSelectedLocation : location)} 
                                className={
                                    location.name === selectedLocation.name
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