/**
 * @desc 退出登录
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/admin/logout`,
    method: 'delete',
  });
}
