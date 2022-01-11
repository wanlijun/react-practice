/**
 * @desc 复制到我的产品
 */
import axios from 'axios';
export class IQueryParams {
  /** commonProductId */
  commonProductId: number;
}

export function request(
  commonProductId: string | number,
  params: IQueryParams,
) {
  return axios({
    url: `/api/ctsSaaS/front/common/product/${commonProductId}/copy`,
    method: 'put',

    params: params,
  });
}
