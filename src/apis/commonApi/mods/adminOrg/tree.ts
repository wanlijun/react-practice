/**
 * @desc 机构树
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/admin/org/tree`,
    method: 'get',
  });
}
