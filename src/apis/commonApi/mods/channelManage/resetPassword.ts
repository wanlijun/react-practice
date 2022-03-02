/**
 * @desc 重置密码
 */
import axios from 'axios';
export class IQueryParams {
  /** password */
  password: string;
}

export function request(id: string | number, params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/reset/password/${id}`,
    method: 'put',

    params: params,
  });
}
