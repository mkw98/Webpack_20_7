import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

//ReactDOM zajmie się renderowaniem głównego komponentu aplikacji, 
//jakim jest komponent App i umieści go w elemencie DOM o id app
