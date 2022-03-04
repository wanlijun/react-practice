/**
 * @desc 详情
 */
import axios from 'axios';

export function request(productId: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/product/${productId}`,
    method: 'get',
  });
}
