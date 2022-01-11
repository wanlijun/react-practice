/**
 * @desc banner获取
 */
import axios from 'axios';
export class IQueryParams {}

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/index/banner`,
    method: 'get',
  });
}
