/**
 * @desc 角色列表
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/admin/role/list`,
    method: 'get',
  });
}
