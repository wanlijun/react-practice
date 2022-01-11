import { defs as userApiDefs, userApi } from './userApi';

import { defs as productApiDefs, productApi } from './productApi';

import { defs as commonApiDefs, commonApi } from './commonApi';

(window as any).defs = {
  userApi: userApiDefs,
  productApi: productApiDefs,
  commonApi: commonApiDefs,
};
(window as any).API = {
  userApi,
  productApi,
  commonApi,
};
