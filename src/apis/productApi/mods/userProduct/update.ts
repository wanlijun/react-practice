/**
 * @desc 修改
 */
import axios from 'axios';

export function request(
  id: string | number,
  bodyParams: defs.productApi.UserProductRequest,
) {
  return axios({
    url: `/api/ctsSaaS/front/user/product/${id}`,
    method: 'put',

    data: bodyParams,
  });
}
