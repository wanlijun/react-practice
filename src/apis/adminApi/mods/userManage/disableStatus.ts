/**
 * @desc 禁用
 */
import axios from 'axios';

export function request(userId: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/user/${userId}/disable`,
    method: 'put',
  });
}
