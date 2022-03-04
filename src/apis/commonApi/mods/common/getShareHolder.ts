/**
 * @desc 获取股东名称列表
 */
import axios from 'axios';
export class IQueryParams {
  /** key */
  key?: string;
  /** keyword */
  keyword: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/company/shareHolder`,
    method: 'get',

    params: params,
  });
}
