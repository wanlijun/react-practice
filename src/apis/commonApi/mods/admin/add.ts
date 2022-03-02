/**
 * @desc 新增
 */
import axios from 'axios';

export function request(bodyParams: defs.commonApi.AdminAddRequest) {
  return axios({
    url: `/api/ctsSaaS/admin/add`,
    method: 'post',

    data: bodyParams,
  });
}
