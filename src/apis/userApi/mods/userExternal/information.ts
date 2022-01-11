/**
 * @desc 获取基本信息-共外部使用(phone需要使用securityService加密传输)
 */
import axios from 'axios';
export class IQueryParams {
  /** phone */
  phone: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/external/user/info`,
    method: 'get',

    params: params,
  });
}
