/**
 * @desc 产品类型
 */
import axios from 'axios';
export class IQueryParams {}

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/common/productType`,
    method: 'get',
  });
}
