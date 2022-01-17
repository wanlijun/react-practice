/**
 * @desc 复制到我的产品
 */
import axios from 'axios';

export function request(commonProductId: string | number) {
  return axios({
    url: `/api/ctsSaaS/front/common/product/${commonProductId}/copy`,
    method: 'put',
  });
}
