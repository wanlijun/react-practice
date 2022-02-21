/**
 * @desc 充值
 */
import axios from 'axios';

export function request(userId: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/user/${userId}/recharge/{points}`,
    method: 'put',
  });
}
