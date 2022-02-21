/**
 * @desc 编辑
 */
import axios from 'axios';

export function request(
  roleId: string | number,
  bodyParams: defs.adminApi.RoleRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/role/${roleId}`,
    method: 'put',

    data: bodyParams,
  });
}
