import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import StoreStateType from 'redux/storeStateType';
import Location, { initalSelectedLocation } from 'models/Location';
import { createLocation, editLocation } from 'redux/Locations/locationsActionCreators';
import { setSelectedLocation } from 'redux/SelectedLocation/selectedLocationActionCreators';

const useLocationDialog = (props: Props) :  useAppToolbarOutcome => {
    
    const { handleCloseLocationDialog } = props;

    const locations = useSelector<StoreStateType, Location[]>(state => state.locations);
    const selectedLocation = useSelector<StoreStateType, Location>(state => state.selectedLocation);

    const [currentLocation, setCurrentLocation] = useState<Location>(initalSelectedLocation);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setCurrentLocation(selectedLocation)
    }, [selectedLocation]);

    const checkDuplicate = () => {
        return locations.find(({name}) => name === currentLocation.name);
    };

    const handleAddLocation = () => {
        const locationExists = checkDuplicate();
        if (locationExists) {
            setError(true);
            return;
        }
        createLocation(currentLocation);
        handleCloseLocationDialog();
        setSelectedLocation(currentLocation);
        setCurrentLocation(initalSelectedLocation);
        setError(false);
    };

    const handleEditLocation = () => {
        editLocation(selectedLocation, currentLocation);
        handleCloseLocationDialog();
        setSelectedLocation(currentLocation);
        setCurrentLocation(initalSelectedLocation);
        setError(false);
    };

    return {
        currentLocation,
        setCurrentLocation,
        handleAddLocation,
        handleEditLocation,
        error
    };
};

export interface useAppToolbarOutcome {
    currentLocation: Location;
    setCurrentLocation: React.Dispatch<React.SetStateAction<Location>>;
    handleAddLocation: () => void;
    handleEditLocation: () => void;
    error: boolean;
};

interface Props {
    handleCloseLocationDialog: () => void;
};

export default useLocationDialog;