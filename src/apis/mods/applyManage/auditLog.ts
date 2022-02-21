/**
 * @desc 日志详情
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/apply/audit/log/${id}`,
    method: 'get',
  });
}
