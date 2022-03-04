/**
 * @desc 新增
 */
import axios from 'axios';

export function request(bodyParams: defs.commonApi.ProductAddRequest) {
  return axios({
    url: `/api/ctsSaaS/admin/product/add`,
    method: 'post',

    data: bodyParams,
  });
}
