import React from 'react';
import './loader.css';

class Loader extends React.Component{
    render() {
        return ( <div className="center">
<div className="lds-hourglass"></div>
        </div>
        )
    }
}

export default Loader;