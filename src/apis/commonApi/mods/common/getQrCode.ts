/**
 * @desc 根据字符串生成二维码
 */
import axios from 'axios';
export class IQueryParams {
  /** str */
  str: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/qrCode`,
    method: 'get',

    params: params,
  });
}
