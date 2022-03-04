/**
 * @desc pdf上传
 */
import axios from 'axios';

export function request(
  commonProductId: string | number,
  bodyParams: defs.commonApi.PdfUrlRequest,
) {
  return axios({
    url: `/api/ctsSaaS/front/common/product/${commonProductId}/pdf`,
    method: 'put',

    data: bodyParams,
  });
}
