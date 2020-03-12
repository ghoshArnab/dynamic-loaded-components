import React from 'react';
import loadable from '@loadable/component';

/* controller for button */

const ButtonRight = loadable(() => import(/* webpackChunkName: "button-right" */'./button-right'));
const ButtonLeft = loadable(() => import(/* webpackChunkName: "button-left" */'./button-left'));
const ButtonContent = loadable(() => import(/* webpackChunkName: "button-content" */'./button-content'));

export default class Button extends React.Component {
    render() {
        return <span className='button' >
            <ButtonRight />
            <ButtonContent />
            <ButtonLeft />            
        </span>;
    }
}