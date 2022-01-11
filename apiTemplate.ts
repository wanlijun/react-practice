import { CodeGenerator, Interface } from 'pont-engine'


function formatPath(rawPath: string) {
  const reg = /\{(\w+)\}/ // 匹配{something}
  const res = reg.exec(rawPath)
  if (res) {
    const index = res.index
    const params = res[1]
    return [rawPath.substr(0, index) + '$' + rawPath.substr(index), params]
  }
  return [rawPath, '']
}

function getRequestParams(params: string) {
  if (!params) {
    return ''
  }
  return `${params}: string | number`
}

export default class MyGenerator extends CodeGenerator {
  // 自定义接口生成模板
  getInterfaceContent(inter: Interface) {
    // 获取query params的类型定义
    //class Params {
       /** commonProductId */
    //  commonProductId: number;
    //}
    const queryParamsType = 'IQueryParams'
    const bodyParams = inter.getBodyParamsCode();
    const paramsCode = inter.getParamsCode(queryParamsType);
    const isEmptyParams = paramsCode.replace(/(\n|\s)/g, '') === `class${queryParamsType}{}`;
    let contentType = inter.consumes && inter.consumes.length ? inter.consumes[0] : '';
    contentType = contentType === 'application/json' || !contentType ? '' : contentType
    const [path, params] = formatPath(inter.path)
    const requestArgs: string[] = [];
    params && requestArgs.push(`${getRequestParams(params)}`);
    !isEmptyParams && requestArgs.push(`params: ${queryParamsType}`);
    bodyParams && requestArgs.push(`bodyParams: ${bodyParams}`);
    const requestParams = requestArgs.join(', ');
    if (path.includes('/api/ctsSaaS/front/common/product/')) {
      console.log(inter.getRequestParams(), '=====>')
    }
    return `
    /**
     * @desc ${inter.description}
     */
    import axios from 'axios'
    export ${inter.getParamsCode(queryParamsType)}
    export function request(${requestParams}) {
      return axios({
        url: \`${path}\`,
        method: '${inter.method}',
        ${
          contentType && 
         ` headers: {
            'Content-Type': '${contentType}'
          },`
        }
        ${isEmptyParams ? '' : '' + 'params: params,'}
        ${bodyParams ? 'data: bodyParams' : ''}
      });
    }
   `
  }
}