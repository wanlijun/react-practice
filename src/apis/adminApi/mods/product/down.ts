/**
 * @desc 下架
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/product/${id}/down`,
    method: 'put',
  });
}
