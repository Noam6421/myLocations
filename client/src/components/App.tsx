import React from 'react';
import { config } from 'dotenv';

import Content from './Content/Content';
import AppToolbar from './AppToolBar/AppToolbar';

config();

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <AppToolbar />
            <Content/>
        </>
    );
}

export default App;