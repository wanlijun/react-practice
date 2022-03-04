/**
 * @desc 信贷建议列表
 */
import axios from 'axios';
export class IQueryParams {
  /** 报告状态 */
  creditAdviceStatus?:
    | 'PENDING_AUTHORIZATION'
    | 'PENDING_TICKETS'
    | 'CREATED'
    | 'CREATING'
    | 'CANCELED';
  /** 统一社会信用代码 */
  creditCode?: string;
  /** 结束时间 */
  endTime?: string;
  /** 企业名称 */
  enterpriseName?: string;
  /** 用户手机号 */
  phone?: string;
  /** 开始时间 */
  startTime?: string;
  /** 所属用户 */
  username?: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/advice/page`,
    method: 'get',

    params: params,
  });
}
