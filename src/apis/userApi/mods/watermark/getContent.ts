/**
 * @desc 获取用户水印文案
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/watermark`,
    method: 'get',
  });
}
