// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Form-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/home/lijunwan/caicai/project/vite/react-practice/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _Form = _interopRequireDefault(require("src/components/Form"));

  function Demo() {
    var config = [{
      type: 'input'
    }];
    return /*#__PURE__*/_react["default"].createElement(_Form["default"], {
      config: config
    });
  }

  return React.createElement(Demo);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport Form from 'src/components/Form';\nexport default function Demo() {\n  const config = [\n    {\n      type: 'input'\n    }\n  ]\n  return <Form config={config}/>\n}"}},"dependencies":{"react":{"version":"17.0.2"}},"componentName":"Form","identifier":"Form-demo"},
  },
};
