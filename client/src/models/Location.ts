interface Location {
    name: string;
    address: string;
    cordinates: number[],
    category: string
};

export const initalSelectedLocation = {name: '', address: '', cordinates: [0, 0], category: ''};

export default Location;