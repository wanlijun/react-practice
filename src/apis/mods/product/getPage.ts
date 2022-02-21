/**
 * @desc 产品列表
 */
import axios from 'axios';
export class IQueryParams {
  /** 结束时间 */
  endTime?: string;
  /** 产品名称 */
  name?: string;
  /** 产品类型Id */
  productTypeId?: number;
  /** 还款方式 */
  repaymentMethod?:
    | 'REPAYMENT_ANYTIME'
    | 'FIRST_INTEREST_LAST_LOAN'
    | 'AVERAGE_CAPITAL_PLUS_INTEREST'
    | 'AVERAGE_CAPITAL'
    | 'TERM_SUPPLY'
    | 'MONTHLY_INTEREST'
    | 'BALLOON_LOAN'
    | 'EQUAL_CAPITAL_PLUS_INTEREST'
    | 'ONE_TIME_REPAYMENT'
    | 'INTEREST_FIRST'
    | 'OTHER';
  /** 开始时间 */
  startTime?: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/admin/product/page`,
    method: 'get',

    params: params,
  });
}
