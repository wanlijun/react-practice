/**
 * @desc 信用报告
 */
import axios from 'axios';
export class IQueryParams {
  /** id */
  id: number;
}

export function request(id: string | number, params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/advice/${id}/report`,
    method: 'get',

    params: params,
  });
}
