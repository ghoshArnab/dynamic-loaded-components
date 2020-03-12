import React from 'react';
import loadable from '@loadable/component';

const ButtonInnerMost = loadable(() => import(/* webpackChunkName: "button-innermost" */'./button-innermost'));

export default class ButtonInner extends React.Component {
    render() {
        return <span className='inner'><ButtonInnerMost /> </span>;
    }
}