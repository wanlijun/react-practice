/**
 * @desc 后台用户列表
 */
import axios from 'axios';
export class IQueryParams {
  /** 姓名 */
  name?: string;
  /** orgId */
  orgId?: number;
  /** 手机号 */
  phone?: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/page`,
    method: 'get',

    params: params,
  });
}
