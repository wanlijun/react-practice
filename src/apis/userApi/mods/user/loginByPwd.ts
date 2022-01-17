/**
 * @desc 登录-密码登录
 */
import axios from 'axios';

export function request(bodyParams: defs.userApi.UserBaseRequest) {
  return axios({
    url: `/api/ctsSaaS/front/user/loginByPwd`,
    method: 'post',

    data: bodyParams,
  });
}
