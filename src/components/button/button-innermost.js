import React from 'react';

import loadable from '@loadable/component';

/* Button right places twice to verify dynamic import handles duplicacy */

const ButtonRight = loadable(() => import(/* webpackChunkName: "button-right" */'./button-right'));

const ButtonIcon = loadable(() => import(/* webpackChunkName: "button-icon" */'./button-icon'));


export default class ButtonInnerMost extends React.Component {
    render() {
        return <span className='innermost'><ButtonIcon />Click <ButtonRight /> </span>;
    }
}