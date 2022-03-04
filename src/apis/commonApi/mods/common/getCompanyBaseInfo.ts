/**
 * @desc 根据公司名获取信息
 */
import axios from 'axios';
export class IQueryParams {
  /** companyName */
  companyName: string;
  /** uid */
  uid: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/companyBaseInfo`,
    method: 'get',

    params: params,
  });
}
