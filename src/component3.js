import React from 'react';
import logo from './logo192.png';

function imagecom() {
    console.log (logo);
    return (
        <div className = "App">
            <img src = {logo} alt = "test image" height = {200} widt = {200} />
        </div>
    );
}

export default logo;