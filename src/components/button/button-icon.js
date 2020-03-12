import React from 'react';

import loadable from '@loadable/component';

/* Button icons all 3 share the same bundle "button-icon" */


const ButtonIconSmall = loadable(() => import(/* webpackChunkName: "button-icon" */'./button-icon-small'));

const ButtonIconLarge = loadable(() => import(/* webpackChunkName: "button-icon" */'./button-icon-large'));


export default class ButtonIcon extends React.Component {
    render() {
        return <span className='icons'><ButtonIconSmall />Click <ButtonIconLarge /> </span>;
    }
}