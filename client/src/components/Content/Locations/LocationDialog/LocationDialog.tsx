import React from 'react';
import { useSelector } from 'react-redux';
import { TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid, FormControl, Select, MenuItem } from '@material-ui/core';

import Location from 'models/Location';
import Category from 'models/Category';
import FormMode from 'models/enums/FormMode';
import StoreStateType from 'redux/storeStateType';

import LocationFields from './LocationFields';
import useLocationDialog from './useLocationDialog';
import LocationFieldsNames from './LocationFieldsNames';

const VIEW_LOCATION_TITLE = 'Location:';
const CREATE_LOCATION_TITLE = 'Add Location:';
const EDIT_LOCATION_TITLE = 'Edit Location:';
const ERROR_MESSAGE = 'This location already exists, please change name';

const LocationDialog: React.FC<Props> = (props: Props): JSX.Element => {

    const { open, mode, handleCloseLocationDialog } = props;
    
    const selectedLocation = useSelector<StoreStateType, Location>(state => state.selectedLocation);
    const categories = useSelector<StoreStateType, Category[]>(state => state.categories);

    const {
        locationName, setLocationName,
        handleAddLocation, handleEditLocation,
        error
    } = useLocationDialog({ handleCloseLocationDialog });


    const viewMode = mode === FormMode.VIEW;
    const createMode = mode === FormMode.CREATE;
    const editMode = mode === FormMode.EDIT;

    const onSubmit = () => {
        if (createMode) {
            handleAddLocation(selectedLocation);
        } else if (editMode) {
            handleEditLocation(selectedLocation)
        }
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
                <DialogContent>
                    <form onSubmit={onSubmit}>
                        <Grid container direction='row' xs={12} alignItems='center'>
                            <Grid item xs={3}>
                                <Typography>{LocationFieldsNames.NAME}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <TextField
                                    defaultValue={locationName === '' ? selectedLocation : locationName}
                                    value={locationName}
                                    onChange={(event) => setLocationName(event.target.value)}
                                    autoFocus
                                    margin='dense'
                                    fullWidth
                                    disabled={viewMode}
                                    placeholder={editMode ? '' : 'New location name' }
                                    error={error}
                                />
                            </Grid>
                        </Grid>
                        {(error && !viewMode) && <Typography>{ERROR_MESSAGE}</Typography>}

                        <Grid container direction='row' xs={12} alignItems='center'>
                            <Grid item xs={3}>
                                <Typography>{LocationFieldsNames.ADDRESS}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <TextField
                                    defaultValue={locationName === '' ? selectedLocation : locationName}
                                    value={locationName}
                                    onChange={(event) => setLocationName(event.target.value)}
                                    autoFocus
                                    margin='dense'
                                    fullWidth
                                    disabled={viewMode}
                                    placeholder={editMode ? '' : 'New location name' }
                                    error={error}
                                />
                            </Grid>
                        </Grid>
                        {(error && !viewMode) && <Typography>{ERROR_MESSAGE}</Typography>}

                        <Grid container direction='row' xs={12} alignItems='center'>
                            <Grid item xs={3}>
                                <Typography>{LocationFieldsNames.LATITUDE}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <TextField
                                    defaultValue={locationName === '' ? selectedLocation : locationName}
                                    value={locationName}
                                    onChange={(event) => setLocationName(event.target.value)}
                                    autoFocus
                                    margin='dense'
                                    fullWidth
                                    disabled={viewMode}
                                    placeholder={editMode ? '' : 'New location name' }
                                    error={error}
                                />
                            </Grid>
                        </Grid>
                        {(error && !viewMode) && <Typography>{ERROR_MESSAGE}</Typography>}

                        <Grid container direction='row' xs={12} alignItems='center'>
                            <Grid item xs={3}>
                                <Typography>{LocationFieldsNames.LONGITUDE}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <TextField
                                    defaultValue={locationName === '' ? selectedLocation : locationName}
                                    value={locationName}
                                    onChange={(event) => setLocationName(event.target.value)}
                                    autoFocus
                                    margin='dense'
                                    fullWidth
                                    disabled={viewMode}
                                    placeholder={editMode ? '' : 'New location name' }
                                    error={error}
                                />
                            </Grid>
                        </Grid>
                        {(error && !viewMode) && <Typography>{ERROR_MESSAGE}</Typography>}
                        
                        <Grid container direction='row' xs={12} alignItems='center'>
                            <Grid item xs={3}>
                                <Typography>Category:</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                { viewMode ?
                                    <TextField 
                                        value={selectedLocation}
                                        disabled 
                                    />
                                :
                                
                                    <Select
                                        value={selectedLocation}
                                        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                                            console.log(event.target.value as string);
                                        }}
                                    >
                                        {
                                            categories.map((category) => (
                                                <MenuItem key={category.name} value={category.name}>
                                                    {category.name}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>  
                                }
                            </Grid>
                        </Grid>
                        {(error && !viewMode) && <Typography>{ERROR_MESSAGE}</Typography>}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseLocationDialog} color='primary'>
                        Cancel
                    </Button>
                    {!viewMode &&
                        <Button 
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