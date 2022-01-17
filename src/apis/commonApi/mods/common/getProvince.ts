/**
 * @desc 地区列表
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/common/province`,
    method: 'get',
  });
}
