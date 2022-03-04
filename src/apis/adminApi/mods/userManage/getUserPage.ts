/**
 * @desc 用户列表
 */
import axios from 'axios';
export class IQueryParams {
  /** 所在市 */
  city?: number;
  /** 是否内部人员 */
  insiders?: boolean;
  /** 姓名 */
  name?: string;
  /** 手机号 */
  phone?: string;
  /** 所在省 */
  province?: number;
  /** 注册时间止 */
  regTimeEnd?: string;
  /** 注册时间起 */
  regTimeStart?: string;
  /** 状态 */
  status?: 'ENABLE' | 'DISABLE';
  /** 用户类型 */
  type?: 'BANK_CUSTOMER' | 'ENTERPRISE_SERVICE';
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/user/page`,
    method: 'get',

    params: params,
  });
}
