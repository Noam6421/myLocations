interface ViewOptions {
    sort: string;
    groupBy: boolean;
    filter: string
};

export const initalViewOptions = {sort: '', groupBy: false, filter: ''};

export default ViewOptions;