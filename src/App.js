import React from 'react';
import './App.css';

import Homepage from './pages/homepage.component'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Homepage/>
            </div>
        );
    }
}

export default App;
