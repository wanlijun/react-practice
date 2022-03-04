/**
 * @desc 详情
 */
import axios from 'axios';

export function request(roleId: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/role/${roleId}`,
    method: 'get',
  });
}
