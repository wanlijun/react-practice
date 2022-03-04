/**
 * @desc 禁用
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/role/${id}/disable`,
    method: 'put',
  });
}
