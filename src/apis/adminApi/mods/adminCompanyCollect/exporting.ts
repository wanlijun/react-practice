/**
 * @desc 企业导出
 */
import axios from 'axios';
export class IQueryParams {
  /** 所在区 */
  area?: string;
  /** 所在市 */
  city?: string;
  /** 企业名称 */
  companyName?: string;
  /** 联系人手机号 */
  contactPhone?: string;
  /** 创建时间-结束时间 */
  createEndTime?: string;
  /** 创建时间-开始时间 */
  createStartTime?: string;
  /** 统一社会信用代码 */
  creditCode?: string;
  /** 企业所属行业 */
  industry?: string;
  /** 所在省 */
  province?: string;
  /** 状态 */
  status?: 'PENDING_AUTHORIZATION' | 'CREATING' | 'CREATED' | 'CANCELED';
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/companyCollect/export`,
    method: 'get',

    params: params,
  });
}
