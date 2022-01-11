/**
 * @desc 找回密码
 */
import axios from 'axios';
export class IQueryParams {}

export function request(bodyParams: defs.userApi.UserBackPasswordRequest) {
  return axios({
    url: `/api/ctsSaaS/front/user/restPwd`,
    method: 'post',

    data: bodyParams,
  });
}
