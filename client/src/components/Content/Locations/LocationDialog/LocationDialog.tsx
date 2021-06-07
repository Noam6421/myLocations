import React from 'react';
import { useSelector } from 'react-redux';
import { TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid, Select, MenuItem, FormControl } from '@material-ui/core';

import Location from 'models/Location';
import Category from 'models/Category';
import FormMode from 'models/enums/FormMode';
import StoreStateType from 'redux/storeStateType';

import LocationFields from './LocationFields';
import useStyles from './LocationDialogStyles';
import LocationMap from './LocationMap/LocationMap';
import useLocationDialog from './useLocationDialog';
import LocationFieldsNames from './LocationFieldsNames';

const VIEW_LOCATION_TITLE = 'Location:';
const CREATE_LOCATION_TITLE = 'Add Location:';
const EDIT_LOCATION_TITLE = 'Edit Location:';
const ERROR_MESSAGE = 'This location already exists, please change name';

const LocationDialog: React.FC<Props> = (props: Props): JSX.Element => {

    const classes = useStyles();

    const { open, mode, handleCloseLocationDialog } = props;
    
    const categories = useSelector<StoreStateType, Category[]>(state => state.categories);

    const {
        currentLocation, setCurrentLocation,
        handleAddLocation, handleEditLocation,
        error
    } = useLocationDialog({ handleCloseLocationDialog });

    const viewMode = mode === FormMode.VIEW;
    const createMode = mode === FormMode.CREATE;
    const editMode = mode === FormMode.EDIT;

    const handleSubmit = (e: any) => {
        e.preventDefault()
        editMode ? handleEditLocation() : handleAddLocation();
    };

    return (
        <>
            <Dialog open={open} onClose={handleCloseLocationDialog}>
                <DialogTitle color='primary'>
                    { viewMode 
                        ? VIEW_LOCATION_TITLE 
                        : editMode
                            ? EDIT_LOCATION_TITLE
                            : CREATE_LOCATION_TITLE
                    }
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <form id='locationForm' onSubmit={(e) => handleSubmit(e)}>
                        <Grid container direction='row' alignItems='center'>
                            <Grid item xs={3}>
                                <Typography>{LocationFieldsNames.NAME}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <TextField
                                    name={LocationFields.NAME}
                                    value={currentLocation.name}
                                    onChange={(event) => setCurrentLocation({...currentLocation, name: event.target.value})}
                                    autoFocus
                                    margin='dense'
                                    required
                                    disabled={viewMode}
                                    placeholder={editMode ? '' : 'New location name' }
                                    error={error}
                                />
                            </Grid>
                        </Grid>

                        <Grid container direction='row' alignItems='center'>
                            <Grid item xs={3}>
                                <Typography>{LocationFieldsNames.ADDRESS}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <TextField
                                    name={LocationFields.ADDRESS}
                                    value={currentLocation.address}
                                    onChange={(event) => setCurrentLocation({...currentLocation, address: event.target.value})}
                                    autoFocus
                                    margin='dense'
                                    required
                                    disabled={viewMode}
                                    placeholder={editMode ? '' : 'Location address' }
                                    error={error}
                                />
                            </Grid>
                        </Grid>
                        { !viewMode && 
                            <>
                            <Grid container direction='row' alignItems='center'>
                                <Grid item xs={3}>
                                    <Typography>{LocationFieldsNames.LATITUDE}</Typography>
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField
                                        name={LocationFields.LATITUDE}
                                        value={currentLocation.cordinates?.latitude}
                                        onChange={(event) => setCurrentLocation({...currentLocation, cordinates: {...currentLocation.cordinates, latitude: +event.target.value}})}
                                        autoFocus
                                        margin='dense'
                                        required
                                        disabled={viewMode}
                                        inputProps={{pattern: '^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$'}}
                                        placeholder={editMode ? '' : 'Location latitude' }
                                        error={error}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container direction='row' alignItems='center'>
                                <Grid item xs={3}>
                                    <Typography>{LocationFieldsNames.LONGITUDE}</Typography>
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField
                                        name={LocationFields.LONGITUDE}
                                        value={currentLocation.cordinates?.longitude}
                                        onChange={(event) => setCurrentLocation({...currentLocation, cordinates: {...currentLocation.cordinates, longitude: +event.target.value}})}
                                        autoFocus
                                        margin='dense'
                                        required
                                        disabled={viewMode}
                                        inputProps={{pattern: '^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$'}}
                                        placeholder={editMode ? '' : 'Location longitude' }
                                        error={error}
                                    />
                                </Grid>
                            </Grid>
                            </>
                        }
                        
                        <Grid container direction='row' alignItems='center'>
                            <Grid item xs={3}>
                                <Typography>{LocationFieldsNames.CATEGORY}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                { viewMode ?
                                    <TextField 
                                        value={currentLocation.category}
                                        disabled 
                                        margin='dense'
                                    />
                                :
                                    <FormControl variant='outlined'>
                                        <Select
                                            name={LocationFields.CATEGORY}
                                            required
                                            margin='dense'
                                            value={currentLocation.category}
                                            onChange={(event) => setCurrentLocation({...currentLocation, category: event.target.value as string})}
                                        >
                                            {
                                                categories.map((category) => (
                                                    <MenuItem key={category.name} value={category.name}>
                                                        {category.name}
                                                    </MenuItem>
                                                ))
                                            }
                                        </Select>  
                                    </FormControl>
                                }
                            </Grid>
                        </Grid>
                        {(error && !viewMode) && <Typography>{ERROR_MESSAGE}</Typography>}
                        { viewMode && 
                            <LocationMap
                                latitude={currentLocation.cordinates?.latitude}
                                longitude={currentLocation.cordinates?.longitude}
                            />
                        }
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseLocationDialog} color='primary'>
                        Cancel
                    </Button>
                    {!viewMode &&
                        <Button 
                            form='locationForm'
                            type='submit'
                            color='primary'
                        >
                            { editMode ? 'Save' : 'Add' }
                        </Button>
                    }
                </DialogActions>
            </Dialog>
        </>
    );
};

interface Props {
    open: boolean;
    mode: FormMode;
    handleCloseLocationDialog: () => void;
};

export default LocationDialog;