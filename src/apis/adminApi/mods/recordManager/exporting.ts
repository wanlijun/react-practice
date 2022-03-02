/**
 * @desc 导出
 */
import axios from 'axios';
export class IQueryParams {
  /** 用户手机号 */
  phone?: string;
  /** 所属用户 */
  username?: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/record/export`,
    method: 'get',

    params: params,
  });
}
