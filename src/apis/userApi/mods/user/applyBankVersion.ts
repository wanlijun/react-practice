/**
 * @desc 申请开通银行版本
 */
import axios from 'axios';

export function request(bodyParams: defs.userApi.ApplyBankVersionRequest) {
  return axios({
    url: `/api/ctsSaaS/front/user/applyBankVersion`,
    method: 'post',

    data: bodyParams,
  });
}
