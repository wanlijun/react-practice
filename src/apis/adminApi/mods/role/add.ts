/**
 * @desc 新增
 */
import axios from 'axios';

export function request(bodyParams: defs.adminApi.RoleRequest) {
  return axios({
    url: `/api/ctsSaaS/admin/role`,
    method: 'post',

    data: bodyParams,
  });
}
