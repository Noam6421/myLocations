import React from 'react';
import { config } from 'dotenv';

import Content from './Content/Content';
import BottomBar from './BottomBar/BottomBar';
import AppToolbar from './AppToolBar/AppToolbar';

config();

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <AppToolbar />
            <Content/>
            <BottomBar/>
        </>
    );
}

export default App;