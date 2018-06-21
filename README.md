# Webpack PoC for Cubbles

## Purpose
Introduction of `webpack` was caused by the need of css scoping. Any css definition within a component should NOT have any side effects onto the rest of the page. 

Webpack allows us to modify css within the buildstep by use of the [css-loader](https://github.com/webpack-contrib/css-loader#localidentname) package.

## Webpack Configuration
We use `webpack` the following way:

1. root-configuration on webpackage level: `/webpack.config.js`
1. sub-configuration per component: `/<component>/webpack.config.js`

> Subconfiguration are found and included automatically when running the build via `"npm run build"`.

## Changes to DevTools
- [ ] Generate `/package.json`
- [ ] Generate `/webpack.config.js`
- [ ] Generate `/<elementary>/webpack.config.js`
- [ ] Generate `/<compound>/webpack.config.js`

## Other TODOs
- [ ] Introduce a `/src` folder and rename `/_dist` to `/dist` (webpacks default name for the dist folder)