/**
 * @desc 获取用户信息
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/admin/getUserInfo`,
    method: 'get',
  });
}
