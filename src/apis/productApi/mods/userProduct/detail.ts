/**
 * @desc 详情
 */
import axios from 'axios';
export class IQueryParams {
  /** ID */
  id: string;
}

export function request(id: string | number, params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/user/product/${id}`,
    method: 'get',

    params: params,
  });
}
