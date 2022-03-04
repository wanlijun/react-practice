/**
 * @desc 获取二维码参数-前端使用
 */
import axios from 'axios';
export class IQueryParams {
  /** key */
  key: string;
  /** u */
  u: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/qrParams`,
    method: 'get',

    params: params,
  });
}
