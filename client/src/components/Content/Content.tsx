import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { indexRoute, locationsRoute } from 'Utils/Routes/Routes';

import Locations from './Locations/Locations';
import Categories from './Categories/Categories';

const Content: React.FC<Props> = (): JSX.Element => {
    return (
        <>
            <Switch>
                <Route path={indexRoute} component={Categories} />
                <Route path={locationsRoute} component={Locations} />
            </Switch>
        </>
    )
};

interface Props {

};

export default Content;