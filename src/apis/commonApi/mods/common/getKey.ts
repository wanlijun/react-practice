/**
 * @desc 生成key
 */
import axios from 'axios';
export class IQueryParams {}

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/common/key`,
    method: 'get',
  });
}
