/**
 * @desc 生成记录
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/advice/${id}`,
    method: 'get',
  });
}
