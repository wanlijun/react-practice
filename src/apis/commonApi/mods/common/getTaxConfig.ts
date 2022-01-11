/**
 * @desc 电子税局发票配置信息
 */
import axios from 'axios';
export class IQueryParams {
  /** creditAdviceId */
  creditAdviceId: number;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/taxConfig`,
    method: 'get',

    params: params,
  });
}
