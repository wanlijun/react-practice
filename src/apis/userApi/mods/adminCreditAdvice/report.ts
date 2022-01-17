/**
 * @desc 信用报告
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/advice/${id}/report`,
    method: 'get',
  });
}
