import React from 'react';
import { useSelector } from 'react-redux';
import { TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid } from '@material-ui/core';

import FormMode from 'models/enums/FormMode';
import StoreStateType from 'redux/storeStateType';

import useLocationDialog from './useLocationDialog';

const VIEW_LOCATION_TITLE = 'Location:';
const CREATE_LOCATION_TITLE = 'Add Location:';
const EDIT_LOCATION_TITLE = 'Edit Location:';
const ERROR_MESSAGE = 'This location already exists, please change name';

const LocationDialog: React.FC<Props> = (props: Props): JSX.Element => {

    const { open, mode, handleCloseLocationDialog } = props;
    
    const selectedLocation = useSelector<StoreStateType, string>(state => state.selectedLocation);

    const {
        locationName, setLocationName,
        handleAddLocation, handleEditLocation,
        error
    } = useLocationDialog({ handleCloseLocationDialog });

    const viewMode = mode === FormMode.VIEW;
    const editMode = mode === FormMode.EDIT;

    return (
        <>
        //TODO FORM FOR LOCATION
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
                    <Grid container direction='row' xs={12} alignItems='center'>
                        <Grid item xs={3}>
                            <Typography>Name:</Typography>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseLocationDialog} color='primary'>
                        Cancel
                    </Button>
                    {!viewMode &&
                        <Button 
                            onClick={editMode ? handleEditLocation : handleAddLocation} 
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