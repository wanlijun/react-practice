/**
 * @desc 编辑
 */
import axios from 'axios';

export function request(
  userId: string | number,
  bodyParams: defs.commonApi.UserInfoRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/user/${userId}`,
    method: 'put',

    data: bodyParams,
  });
}
