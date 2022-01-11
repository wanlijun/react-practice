/**
 * @desc 分页列表
 */
import axios from 'axios';
export class IQueryParams {
  /** 关键字 */
  keyword?: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/user/product/page`,
    method: 'get',

    params: params,
  });
}
