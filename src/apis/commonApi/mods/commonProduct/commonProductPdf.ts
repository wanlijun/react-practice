/**
 * @desc pdf上传
 */
import axios from 'axios';
export class IQueryParams {
  /** commonProductId */
  commonProductId: number;
}

export function request(
  commonProductId: string | number,
  params: IQueryParams,
  bodyParams: defs.commonApi.PdfUrlRequest,
) {
  return axios({
    url: `/api/ctsSaaS/front/common/product/${commonProductId}/pdf`,
    method: 'put',

    params: params,
    data: bodyParams,
  });
}
