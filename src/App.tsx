import React, {FC} from 'react';
import {Provider} from 'react-redux';

// store
import store from 'src/store';

// Modules
import Layouts from 'Modules/Layouts';
import RouterTest from 'Modules/RouterTest';
import Formik from 'Modules/Formik';
import Animation from 'Modules/Animation';

const App:FC = () => {
    
    return (
        <Provider store={store}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Animation />
            </div>
        </Provider>
    );
};

export default App;