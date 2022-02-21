/**
 * @desc 操作日志
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/admin/org/operateLog`,
    method: 'get',
  });
}
