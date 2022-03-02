/**
 * @desc 用户移除渠道
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/user/${id}`,
    method: 'delete',
  });
}
