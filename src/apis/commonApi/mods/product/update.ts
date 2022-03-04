/**
 * @desc 编辑
 */
import axios from 'axios';

export function request(
  id: string | number,
  bodyParams: defs.commonApi.ProductAddRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/product/${id}`,
    method: 'put',

    data: bodyParams,
  });
}
