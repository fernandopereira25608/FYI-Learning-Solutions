import './404Style.css'

import { useHistory } from 'react-router-dom';

import React from 'react';

import Undraw from '../../Images/404/undraw.png'

function PageNotFound() {

    const history = useHistory();

    return (
        <div>
            <div class="nf-main">
                <div class="nf-main-content">
                    <img src={Undraw} class="nf-main-img"/>
                    <p>Some places don't take us where we want, go <b onClick={() => history.push('/')}>back</b></p>
                    <h3>404 - Page not Found</h3>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;