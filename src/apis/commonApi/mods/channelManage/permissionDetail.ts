/**
 * @desc 用户权限详情
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/permission/${id}`,
    method: 'get',
  });
}
