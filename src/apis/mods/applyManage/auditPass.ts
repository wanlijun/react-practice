/**
 * @desc 审核通过
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/apply/audit/pass/${id}`,
    method: 'put',
  });
}
