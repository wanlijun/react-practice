/**
 * @desc 授权报告等级
 */
import axios from 'axios';
export class IQueryParams {}

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/common/reportLevel`,
    method: 'get',
  });
}
