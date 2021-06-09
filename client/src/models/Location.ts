interface Location {
    name: string;
    address: string;
    coordinates: {latitude: number, longitude: number},
    category: string
};

export const initalSelectedLocation = {name: '', address: '', coordinates: {latitude: 0, longitude: 0}, category: ''};

export default Location;