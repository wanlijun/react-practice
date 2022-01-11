/**
 * @desc 模型指标修改
 */
import axios from 'axios';
export class IQueryParams {
  /** id */
  id: number;
}

export function request(
  id: string | number,
  params: IQueryParams,
  bodyParams: defs.productApi.UserTargetRequest,
) {
  return axios({
    url: `/api/ctsSaaS/front/user/product/${id}/target`,
    method: 'put',

    params: params,
    data: bodyParams,
  });
}
