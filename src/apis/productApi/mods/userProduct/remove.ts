/**
 * @desc 删除
 */
import axios from 'axios';

export function request(id: string | number) {
  return axios({
    url: `/api/ctsSaaS/front/user/product/${id}`,
    method: 'delete',
  });
}
