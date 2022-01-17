/**
 * @desc 注册
 */
import axios from 'axios';

export function request(bodyParams: defs.userApi.UserRegisterRequest) {
  return axios({
    url: `/api/ctsSaaS/front/user/register`,
    method: 'post',

    data: bodyParams,
  });
}
