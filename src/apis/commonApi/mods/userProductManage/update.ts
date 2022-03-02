/**
 * @desc 修改
 */
import axios from 'axios';

export function request(
  id: string | number,
  bodyParams: defs.commonApi.UserProductRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/user/product/${id}`,
    method: 'put',

    data: bodyParams,
  });
}
