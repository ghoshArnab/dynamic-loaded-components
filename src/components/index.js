/* Component controller to load component by dynamic import */


import loadable from '@loadable/component';

export const Button = loadable(() => import(/* webpackChunkName: "button" */'./button'));

export const Link = loadable(() => import(/* webpackChunkName: "link" */'./link'));
