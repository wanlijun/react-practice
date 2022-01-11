/**
 * @desc 添加埋点
 */
import axios from 'axios';
export class IQueryParams {}

export function request(bodyParams: defs.commonApi.BuriedPointRequest) {
  return axios({
    url: `/api/ctsSaaS/front/common/addBuriedPoint`,
    method: 'post',

    data: bodyParams,
  });
}
