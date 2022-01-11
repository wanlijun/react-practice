/**
 * @desc 修改
 */
import axios from 'axios';
export class IQueryParams {
  /** ID */
  id: string;
}

export function request(
  id: string | number,
  params: IQueryParams,
  bodyParams: defs.productApi.UserProductRequest,
) {
  return axios({
    url: `/api/ctsSaaS/front/user/product/${id}`,
    method: 'put',

    params: params,
    data: bodyParams,
  });
}
