/**
 * @desc 行业列表
 */
import axios from 'axios';
export class IQueryParams {}

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/common/industry`,
    method: 'get',
  });
}
