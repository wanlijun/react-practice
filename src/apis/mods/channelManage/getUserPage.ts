/**
 * @desc 用户列表(添加用户)
 */
import axios from 'axios';
export class IQueryParams {
  /** 所在市 */
  city?: string;
  /** 姓名 */
  name?: string;
  /** 手机号 */
  phone?: string;
  /** 所在省 */
  province?: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/user/page`,
    method: 'get',

    params: params,
  });
}
