/**
 * @desc 渠道用户列表
 */
import axios from 'axios';
export class IQueryParams {
  /** 渠道id */
  channelId?: number;
  /** 所在市 */
  city?: string;
  /** 结束时间 */
  endTime?: string;
  /** 姓名 */
  name?: string;
  /** 手机号 */
  phone?: string;
  /** 所在省 */
  province?: string;
  /** 开始时间 */
  startTime?: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/page`,
    method: 'get',

    params: params,
  });
}
