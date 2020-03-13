import React from 'react';
import loadable from '@loadable/component';

/* controller for button */
const btnLeft = "button-left";


const ButtonRight = loadable(() => import(/* webpackChunkName: "button-right" */'./button-right'));

/* https://github.com/webpack/webpack/issues/4807 */
/* [request] is an identifier for dynamic chunk name */
const ButtonLeft = loadable(() => import(
    /* webpackChunkName: "[request]" */
    `./${btnLeft}`
  ));
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
