/**
 * @desc 资金方
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/common/funders`,
    method: 'get',
  });
}
