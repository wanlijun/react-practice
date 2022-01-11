/**
 * @desc 用户登出
 */
import axios from 'axios';
export class IQueryParams {}

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/user/logout`,
    method: 'delete',
  });
}
