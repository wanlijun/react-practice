/**
 * @desc 用户登出
 */

import * as SWR from 'swr';

import * as defs from '../../baseClass';
import * as Hooks from '../../hooks';

export class Params {}

export const method = 'DELETE';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey('/api/ctsSaaS/front/user/logout', params, 'DELETE'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/ctsSaaS/front/user/logout', params, 'DELETE'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(params = {}, swrOptions = {}) {
  return Hooks.useRequest(
    '/api/ctsSaaS/front/user/logout',
    params,
    swrOptions,
    { method: 'DELETE' },
  );
}
