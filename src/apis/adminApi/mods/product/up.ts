/**
 * @desc 上架
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/product/${id}/up`,
    method: 'put',
  });
}
