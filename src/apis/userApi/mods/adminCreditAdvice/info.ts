/**
 * @desc 信贷建基本信息
 */
import axios from 'axios';
export class IQueryParams {
  /** id */
  id: number;
}

export function request(id: string | number, params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/advice/${id}/info`,
    method: 'get',

    params: params,
  });
}
