/**
 * @desc 修改保存
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
    Hooks.getUrlKey('/api/ctsSaaS/front/watermark/save', params, 'POST'),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey('/api/ctsSaaS/front/watermark/save', params, 'POST'),
    shouldRevalidate,
  );
}

export function useDeprecatedRequest(params = {}, swrOptions = {}) {
  return Hooks.useRequest(
    '/api/ctsSaaS/front/watermark/save',
    params,
    swrOptions,
    { method: 'POST' },
  );
}
