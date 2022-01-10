/**
 * @desc 登录-密码登录
 */

import * as SWR from 'swr';

import * as defs from '../../baseClass';
import * as Hooks from '../../hooks';

export class Params {}

export const method = 'POST';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/ctsSaaS/front/user/loginByPwd', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/ctsSaaS/front/user/loginByPwd', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(params = {}, swrOptions = {}) {
  return Hooks.useRequest(
    '/api/ctsSaaS/front/user/loginByPwd',
    params,
    swrOptions,
    { method: 'POST' },
  );
}
