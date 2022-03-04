/**
 * @desc 详情
 */
import axios from 'axios';

export function request(commonProductId: string | number) {
  return axios({
    url: `/api/ctsSaaS/front/common/product/${commonProductId}`,
    method: 'get',
  });
}
