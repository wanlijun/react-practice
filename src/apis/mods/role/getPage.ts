/**
 * @desc 角色列表
 */
import axios from 'axios';
export class IQueryParams {
  /** roleName */
  roleName?: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/role/page`,
    method: 'get',

    params: params,
  });
}
