import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import Location from 'models/Location';
import StoreStateType from 'redux/storeStateType';
import { setSelectedLocation } from 'redux/SelectedLocation/selectedLocationActionCreators';

const useLocationDialog = (props: Props) :  useAppToolbarOutcome => {
    
    const { handleCloseLocationDialog } = props;

    const locations = useSelector<StoreStateType, Location[]>(state => state.locations);
    const selectedLocation = useSelector<StoreStateType, Location>(state => state.selectedLocation);

    const [locationName, setLocationName] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const checkDuplicate = () => {
        return locations.find(({name}) => name === locationName);
    };

    useEffect(() => {
        setLocationName(selectedLocation.name)
    }, [selectedLocation]);

    useEffect(() => {
        const duplicate = checkDuplicate();
        if (duplicate) {
            setError(true);
        } else {
            setError(false);
        }
    }, [locationName]);
    
    const handleAddLocation = (selectedLocation: Location) => {
        if (error) {
            return;
        }
        console.log(selectedLocation)
        //createLocation({name: locationName});
        handleCloseLocationDialog();
        setLocationName('');
        setError(false);
    };

    const handleEditLocation = (selectedLocation: Location) => {
        if (error) {
            return;
        }
        //editLocation({name: selectedLocation}, locationName);
        handleCloseLocationDialog();
        setSelectedLocation(selectedLocation);
        setLocationName('');
        setError(false);
    };

    return {
        locationName,
        setLocationName,
        handleAddLocation,
        handleEditLocation,
        error
    };
};

export interface useAppToolbarOutcome {
    locationName: string;
    setLocationName: React.Dispatch<React.SetStateAction<string>>;
    handleAddLocation: (selectedLocation: Location) => void;
    handleEditLocation: (selectedLocation: Location) => void;
    error: boolean;
};

interface Props {
    handleCloseLocationDialog: () => void;
};

export default useLocationDialog;