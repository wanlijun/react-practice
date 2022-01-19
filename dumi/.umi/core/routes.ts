// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/home/lijunwan/caicai/project/vite/react-practice/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/home/lijunwan/caicai/project/vite/react-practice/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/home/lijunwan/caicai/project/vite/react-practice/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('/home/lijunwan/caicai/project/vite/react-practice/src/components/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/index.md",
          "updatedTime": 1642590960784,
          "slugs": [
            {
              "depth": 1,
              "value": "公共组件",
              "heading": "公共组件"
            }
          ],
          "title": "公共组件"
        },
        "title": "公共组件 - 公共组件"
      },
      {
        "path": "/form",
        "component": require('/home/lijunwan/caicai/project/vite/react-practice/src/components/Form/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Form/index.md",
          "updatedTime": 1642591251174,
          "componentName": "Form",
          "slugs": [
            {
              "depth": 1,
              "value": "配置性表单",
              "heading": "配置性表单"
            },
            {
              "depth": 2,
              "value": "基础用法",
              "heading": "基础用法"
            }
          ],
          "title": "配置性表单",
          "hasPreviewer": true,
          "group": {
            "path": "/form",
            "title": "Form"
          }
        },
        "title": "配置性表单 - 公共组件"
      }
    ],
    "title": "公共组件",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
