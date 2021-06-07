import React from 'react';
import GoogleMap from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import useStyles from './LocationMapStyles';

const MarkerComponent: React.FC<MarkerProps> = (props: MarkerProps): JSX.Element => {
    return (
        <LocationOnIcon />
    )
};

const LocationMap: React.FC<Props> = (props: Props): JSX.Element => {

    const { latitude, longitude } = props;

    const classes = useStyles();

    const center = { lat: latitude, lng: longitude };
    const zoom = 11;

    return (
        <div
            className={classes.locationMap}
        >
            <GoogleMap
                bootstrapURLKeys={{
                key: process.env.REACT_APP_API_KEY as string}}
                center={center}
                zoom={zoom}
            >
                <MarkerComponent lat={latitude} lng={longitude}/>
            </GoogleMap>
        </div>
    );
};

interface Props {
    latitude: number;
    longitude: number;
};

interface MarkerProps {
    lat: number;
    lng: number;
};

export default LocationMap;