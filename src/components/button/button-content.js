import React from 'react';
import loadable from '@loadable/component';

/* controller for button */

const ButtonInner = loadable(() => import(/* webpackChunkName: "button-inner" */'./button-inner'));

export default class ButtonContent extends React.Component {
    render() {
        return <span className="content"><ButtonInner /></span>
    }
}