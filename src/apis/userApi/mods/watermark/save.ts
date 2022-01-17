/**
 * @desc 修改保存
 */
import axios from 'axios';

export function request(bodyParams: defs.userApi.WatermarkRequest) {
  return axios({
    url: `/api/ctsSaaS/front/watermark/save`,
    method: 'post',

    data: bodyParams,
  });
}
