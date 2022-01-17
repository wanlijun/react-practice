/**
 * @desc 新增
 */
import axios from 'axios';

export function request(bodyParams: defs.productApi.UserProductAddRequest) {
  return axios({
    url: `/api/ctsSaaS/front/user/product/add`,
    method: 'post',

    data: bodyParams,
  });
}
