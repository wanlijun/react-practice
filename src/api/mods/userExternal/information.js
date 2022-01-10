/**
 * @desc 获取基本信息-共外部使用(phone需要使用securityService加密传输)
 */

import * as SWR from 'swr';

import * as defs from '../../baseClass';
import * as Hooks from '../../hooks';

export class Params {
  /** phone */
  phone;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/ctsSaaS/front/external/user/info', params, 'GET'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/ctsSaaS/front/external/user/info', params, 'GET'),
    shouldRevalidate,
  );
}

export function useRequest(params = {}, swrOptions = {}) {
  return Hooks.useRequest(
    '/api/ctsSaaS/front/external/user/info',
    params,
    swrOptions,
  );
}
