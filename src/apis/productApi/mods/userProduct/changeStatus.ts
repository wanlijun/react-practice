/**
 * @desc 上架/下架
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/front/user/product/${id}/status`,
    method: 'put',
  });
}
