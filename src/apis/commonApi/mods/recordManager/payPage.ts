/**
 * @desc 充值记录列表
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
    url: `/api/ctsSaaS/admin/record/page`,
    method: 'get',

    params: params,
  });
}
