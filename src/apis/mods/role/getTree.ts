/**
 * @desc 获取权限树
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/admin/role/tree`,
    method: 'get',
  });
}
