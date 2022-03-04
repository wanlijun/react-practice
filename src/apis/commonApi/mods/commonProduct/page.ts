/**
 * @desc 分页列表
 */
import axios from 'axios';
export class IQueryParams {
  /** 地区 */
  area?: string;
  /** 资金方 */
  capitalSourceId?: number;
  /** 关键字 */
  keyword?: string;
  /** 产品类型 */
  typeId?: number;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/product/page`,
    method: 'get',

    params: params,
  });
}
