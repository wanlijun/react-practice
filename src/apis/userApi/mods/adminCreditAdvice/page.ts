/**
 * @desc 信贷建议列表
 */
import axios from 'axios';
export class IQueryParams {}

export function request(bodyParams: defs.userApi.CreditAdviceRequest) {
  return axios({
    url: `/api/ctsSaaS/admin/advice/page`,
    method: 'get',

    data: bodyParams,
  });
}
