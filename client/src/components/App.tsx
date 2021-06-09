import { config } from 'dotenv';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Content from './Content/Content';
import BottomBar from './BottomBar/BottomBar';
import AppToolbar from './AppToolBar/AppToolbar';

config();

const App: React.FC = (): JSX.Element => {

    const history = useHistory()
    const [currentPage, setCurrentPage] = useState(history.location.pathname);

    return (
        <>
            <AppToolbar currentPage={currentPage}/>
            <Content/>
            <BottomBar setCurrentPage={setCurrentPage}/>
        </>
    );
}

export default App;