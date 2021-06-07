interface Location {
    name: string;
    address: string;
    cordinates: {latitude: number, longitude: number},
    category: string
};

export const initalSelectedLocation = {name: '', address: '', cordinates: {latitude: 0, longitude: 0}, category: ''};

export default Location;