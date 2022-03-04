/**
 * @desc 判断key是否失效
 */
import axios from 'axios';
export class IQueryParams {
  /** key */
  key: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/key/expired`,
    method: 'get',

    params: params,
  });
}
