/**
 * @desc 累计消费条数
 */

import * as SWR from 'swr';

import * as defs from '../../baseClass';
import * as Hooks from '../../hooks';

export class Params {
  /** 结束时间 */
  endTime;
  /** 开始时间 */
  startTime;
}

export const method = 'GET';

export function mutate(
  params = {},
  newValue = undefined,
  shouldRevalidate = true,
) {
  return SWR.mutate(
    Hooks.getUrlKey(
      '/api/ctsSaaS/front/user/consumeRecord/total',
      params,
      'GET',
    ),
    newValue,
    shouldRevalidate,
  );
}

export function trigger(params = {}, shouldRevalidate = true) {
  return SWR.trigger(
    Hooks.getUrlKey(
      '/api/ctsSaaS/front/user/consumeRecord/total',
      params,
      'GET',
    ),
    shouldRevalidate,
  );
}

export function useRequest(params = {}, swrOptions = {}) {
  return Hooks.useRequest(
    '/api/ctsSaaS/front/user/consumeRecord/total',
    params,
    swrOptions,
  );
}
