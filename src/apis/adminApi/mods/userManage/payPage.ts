/**
 * @desc 充值记录列表
 */
import axios from 'axios';

export function request(userId: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/user/${userId}/rechargeRecord/page`,
    method: 'get',
  });
}
