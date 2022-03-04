/**
 * @desc 用户基本信息
 */
import axios from 'axios';

export function request(userId: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/user/info/${userId}`,
    method: 'get',
  });
}
