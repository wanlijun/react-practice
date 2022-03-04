/**
 * @desc 登录-密码登录
 */
import axios from 'axios';

export function request(bodyParams: defs.commonApi.UserBaseRequest) {
  return axios({
    url: `/api/ctsSaaS/admin/loginByPwd`,
    method: 'post',

    data: bodyParams,
  });
}
