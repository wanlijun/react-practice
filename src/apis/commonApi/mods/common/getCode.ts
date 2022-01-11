/**
 * @desc 获取验证码
 */
import axios from 'axios';
export class IQueryParams {
  /** phone */
  phone: string;
  /** smsCodeType */
  smsCodeType: 'LOGIN' | 'REGISTER' | 'RETRIEVE_PASSWORD' | 'VERIFY_CODE';
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/phone/code`,
    method: 'get',

    params: params,
  });
}
