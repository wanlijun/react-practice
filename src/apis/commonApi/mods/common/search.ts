/**
 * @desc 根据关键字搜索公司
 */
import axios from 'axios';
export class IQueryParams {
  /** keyword */
  keyword: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/company/search`,
    method: 'get',

    params: params,
  });
}
