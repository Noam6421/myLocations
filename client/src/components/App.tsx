import React from 'react';
import { config } from 'dotenv';

import useApp from './useApp';
import Content from './Content/Content';
import AppToolbar from './AppToolBar/AppToolbar';

config();

const App: React.FC = (): JSX.Element => {

    const {  } = useApp();

    return (
        <>
            <AppToolbar />
            <Content/>
        </>
    );
}

export default App;