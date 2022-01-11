/**
 * @desc 删除
 */
import axios from 'axios';
export class IQueryParams {
  /** ID */
  id: string;
}

export function request(id: string | number, params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/user/product/${id}`,
    method: 'delete',

    params: params,
  });
}
