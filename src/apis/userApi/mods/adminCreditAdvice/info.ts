/**
 * @desc 信贷建基本信息
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/advice/${id}/info`,
    method: 'get',
  });
}
