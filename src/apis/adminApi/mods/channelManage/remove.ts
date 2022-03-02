/**
 * @desc 渠道删除
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/${id}`,
    method: 'delete',
  });
}
