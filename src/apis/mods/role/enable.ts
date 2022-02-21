/**
 * @desc 启用
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/role/${id}/enable`,
    method: 'put',
  });
}
