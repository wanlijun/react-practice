/**
 * @desc 充值记录列表
 */
import axios from 'axios';
export class IQueryParams {
  /** 结束时间 */
  endTime?: string;
  /** 搜索关键字 */
  searchWord?: string;
  /** 开始时间 */
  startTime?: string;
  /** 充值状态 */
  status?: 'SUCCESS' | 'FAIL';
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/user/rechargeRecord/page`,
    method: 'get',

    params: params,
  });
}
