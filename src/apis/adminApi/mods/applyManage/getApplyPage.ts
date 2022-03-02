/**
 * @desc 申请列表
 */
import axios from 'axios';
export class IQueryParams {
  /** 申请时间止 */
  applyTimeEnd?: string;
  /** 申请时间起 */
  applyTimeStart?: string;
  /** 所在市 */
  city?: string;
  /** 姓名 */
  name?: string;
  /** 手机号 */
  phone?: string;
  /** 所在省 */
  province?: string;
  /** 审核状态 */
  status?: 'PENDING' | 'APPROVED' | 'REJECTED';
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/apply/page`,
    method: 'get',

    params: params,
  });
}
