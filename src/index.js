import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';

class Acceuil extends React.Component {
    render () {
        return <h1 className="header">Bonjour react app </h1>;
    }
}

ReactDOM.render(<Acceuil />, document.getElementById('app'));
