/**
 * @desc 模型指标修改
 */
import axios from 'axios';

export function request(
  id: string | number,
  bodyParams: defs.commonApi.UserTargetRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/user/product/${id}/target`,
    method: 'put',

    data: bodyParams,
  });
}
