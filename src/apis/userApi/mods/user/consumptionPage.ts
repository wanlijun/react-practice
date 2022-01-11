/**
 * @desc 消费记录列表
 */
import axios from 'axios';
export class IQueryParams {
  /** 结束时间 */
  endTime?: string;
  /** 开始时间 */
  startTime?: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/user/consumeRecord/page`,
    method: 'get',

    params: params,
  });
}
