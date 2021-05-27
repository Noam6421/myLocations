import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { indexRoute } from 'Utils/Routes/Routes';
import Categories from './Categories/Categories';

const Content: React.FC<Props> = (): JSX.Element => {
    return (
        <>
            <Switch>
                <Route path={indexRoute} component={Categories} />
            </Switch>
        </>
    )
};

interface Props {

};

export default Content;