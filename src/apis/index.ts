import { defs as adminApiDefs, adminApi } from './adminApi';

import { defs as commonApiDefs, commonApi } from './commonApi';

(window as any).defs = {
  adminApi: adminApiDefs,
  commonApi: commonApiDefs,
};
(window as any).API = {
  adminApi,
  commonApi,
};
