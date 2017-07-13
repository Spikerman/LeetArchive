/**
 * Created by chenhao on 10/07/2017.
 */

import React from 'react';
import ReactDom from 'react-dom';
import AppContainer from './containers/app.container'

class App extends React.Component {
    render() {
        return (
            <div>
                <AppContainer/>
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('content')
);