/**
 * @desc 登录-验证码登录
 */
import axios from 'axios';

export function request(bodyParams: defs.userApi.UserLoginCodeRequest) {
  return axios({
    url: `/api/ctsSaaS/front/user/loginByCode`,
    method: 'post',

    data: bodyParams,
  });
}
