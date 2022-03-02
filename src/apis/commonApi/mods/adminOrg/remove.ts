/**
 * @desc 机构删除
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/org/${id}`,
    method: 'delete',
  });
}
