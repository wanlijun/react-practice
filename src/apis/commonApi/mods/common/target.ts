/**
 * @desc 指标库
 */
import axios from 'axios';
export class IQueryParams {
  /** hot */
  hot?: boolean;
  /** userProductId */
  userProductId?: number;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/target`,
    method: 'get',

    params: params,
  });
}
