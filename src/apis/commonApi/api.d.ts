type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace commonApi {
    export class BuriedPointRequest {
      /** 埋点code */
      buriedCode?: string;
    }

    export class CommonProductDetailResponse {
      /** 申请人要求 */
      applicantRequirements?: string;

      /** 展业区域 */
      areas?: string;

      /** 资金方 */
      capitalSource?: string;

      /** 产品介绍 */
      description?: string;

      /** 企业要求 */
      enterpriseRequirement?: string;

      /** 产品id */
      id?: string;

      /** 利率最大值 */
      interestRateMax?: number;

      /** 利率最小值 */
      interestRateMin?: number;

      /** 利率类型 */
      interestRateType?: 'DAY' | 'MONTH' | 'YEAR';

      /** 借款周期结束 */
      loanPeriodEnd?: number;

      /** 借款周期开始 */
      loanPeriodStart?: number;

      /** logo */
      logo?: string;

      /** 最高额度 */
      maxCreditLine?: number;

      /** 产品名称 */
      name?: string;

      /** pdfUrl */
      pdfUrl?: string;

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

      /** 模型指标 */
      targetModel?: Array<defs.commonApi.CommonTargetLibraryResponse>;

      /** 产品类型 */
      type?: string;
    }

    export class CommonProductPageResponse {
      /** id */
      id?: number;

      /** 利率最大值 */
      interestRateMax?: number;

      /** 利率最小值 */
      interestRateMin?: number;

      /** 利率类型 */
      interestRateType?: string;

      /** 借款周期结束 */
      loanPeriodEnd?: number;

      /** 借款周期开始 */
      loanPeriodStart?: number;

      /** logo */
      logo?: string;

      /** 最高额度 */
      maxCreditLine?: number;

      /** 产品名称 */
      name?: string;

      /** 还款方式 */
      repaymentMethod?: string;

      /** 状态 */
      status?: 'UPPER_SHELF' | 'OFF_SHELF';
    }

    export class CommonTargetLibraryInfo {
      /** 数据类型 */
      dataType?:
        | 'NUMBER'
        | 'STRING'
        | 'STR_LIST'
        | 'BOOL'
        | 'DICTIONARY'
        | 'AREA'
        | 'INDUSTRY';

      /** 是否热门 */
      hot?: boolean;

      /** 指标id */
      id?: number;

      /** 是否支持多选 */
      multiSelect?: boolean;

      /** 指标名称 */
      name?: string;

      /** 运算符 */
      operator?:
        | 'EQUAL'
        | 'UNEQUAL'
        | 'GREATER_THAN'
        | 'GREATER_THAN_OR_EQUAL'
        | 'LESS_THAN'
        | 'LESS_THAN_OR_EQUAL'
        | 'BEGIN_WITH'
        | 'NOT_BEGIN_WITH'
        | 'END_WITH'
        | 'NOT_END_WITH'
        | 'CONTAIN'
        | 'NOT_CONTAIN'
        | 'CONTAINED'
        | 'NOT_CONTAINED'
        | 'AND'
        | 'OR';

      /** 可选值 */
      optionalValue?: object;

      /** 是否选中 */
      selected?: boolean;

      /** 指标类型 */
      type?: 'HOT' | 'CORP' | 'TAX' | 'INVOICE' | 'JUDICIAL';

      /** 单位 */
      unit?: 'M' | 'S' | 'BF' | 'J' | 'C' | 'W' | 'P' | 'N' | 'Y' | 'D' | 'H';

      /** 值 */
      value?: object;

      /** 值名称：主要用于地区、行业 */
      valueStr?: object;
    }

    export class CommonTargetLibraryResponse {
      /** 指标列表 */
      infos?: Array<defs.commonApi.CommonTargetLibraryInfo>;

      /** 指标类型 */
      type?: 'HOT' | 'CORP' | 'TAX' | 'INVOICE' | 'JUDICIAL';
    }

    export class CompanyBaseInfo {
      /** frName */
      frName?: string;

      /** province */
      province?: string;

      /** socialCode */
      socialCode?: string;
    }

    export class FunderInfo {
      /** funderName */
      funderName?: string;

      /** id */
      id?: number;
    }

    export class Map<T0 = any, T1 = any> {}

    export class ParamsArea {
      /** child */
      child?: Array<defs.commonApi.ParamsArea>;

      /** code */
      code?: string;

      /** invoice */
      invoice?: boolean;

      /** name */
      name?: string;

      /** parentCode */
      parentCode?: string;

      /** pinyin */
      pinyin?: string;

      /** shortName */
      shortName?: string;

      /** shortPinyin */
      shortPinyin?: string;

      /** type */
      type?: string;
    }

    export class ParamsIndustry {
      /** child */
      child?: Array<defs.commonApi.ParamsIndustry>;

      /** firstLetter */
      firstLetter?: string;

      /** industryCode */
      industryCode?: string;

      /** industryName */
      industryName?: string;
    }

    export class PdfUrlRequest {
      /** pdfurl */
      pdfUrl?: string;
    }

    export class ProductTypeVo {
      /** id */
      id?: number;

      /** typeName */
      typeName?: string;
    }

    export class ReportLevelVo {
      /** 报告类型 */
      collectType?: 'SJ' | 'SJ_ZJ';

      /** id */
      id?: number;

      /** 等级名称 */
      levelName?: string;

      /** 是否推荐 */
      recommend?: boolean;

      /** 说明 */
      remark?: string;
    }

    export class ScBaseDataType<T0 = any> {
      /** 结果 */
      result?: string;
    }

    export class ScListData<T0 = any> {
      /** 结果 */
      content?: Array<T0>;
    }

    export class ScPage {
      /** size */
      size?: number;

      /** total */
      total?: number;
    }

    export class ScPageData<T0 = any> {
      /** content */
      content?: Array<T0>;

      /** page */
      page?: defs.commonApi.ScPage;
    }

    export class ScPageResponse<T0 = any> {
      /** code */
      code?: string;

      /** data */
      data?: defs.commonApi.ScPageData<
        defs.commonApi.CommonProductPageResponse
      >;

      /** message */
      message?: string;

      /** traceId */
      traceId?: string;
    }

    export class ScResponse<T0 = any> {
      /** code */
      code?: string;

      /** data */
      data?: T0;

      /** message */
      message?: string;

      /** traceId */
      traceId?: string;
    }
  }
}

declare namespace API {
  export namespace commonApi {
    /**
     * 公共库
     */
    export namespace common {
      /**
       * 添加埋点
       * /api/ctsSaaS/front/common/addBuriedPoint
       */
      export namespace addBuriedPoint {
        export class Params {}

        export type Response = defs.commonApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.commonApi.BuriedPointRequest,
        ): Promise<defs.commonApi.ScResponse<void>>;
      }

      /**
       * 根据关键字搜索公司
       * /api/ctsSaaS/front/common/company/search
       */
      export namespace search {
        export class Params {
          /** keyword */
          keyword: string;
        }

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScListData<string>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<defs.commonApi.ScListData<string>>
        >;
      }

      /**
       * 获取股东名称列表
       * /api/ctsSaaS/front/common/company/shareHolder
       */
      export namespace getShareHolder {
        export class Params {
          /** key */
          key?: string;
          /** keyword */
          keyword: string;
        }

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScListData<string>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<defs.commonApi.ScListData<string>>
        >;
      }

      /**
       * 根据公司名获取信息
       * /api/ctsSaaS/front/common/companyBaseInfo
       */
      export namespace getCompanyBaseInfo {
        export class Params {
          /** companyName */
          companyName: string;
          /** uid */
          uid: string;
        }

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.CompanyBaseInfo
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.commonApi.ScResponse<defs.commonApi.CompanyBaseInfo>>;
      }

      /**
       * 生成二维码
       * /api/ctsSaaS/front/common/createQrCode
       */
      export namespace createQrCode {
        export class Params {}

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScBaseDataType<string>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<defs.commonApi.ScBaseDataType<string>>
        >;
      }

      /**
       * 资金方
       * /api/ctsSaaS/front/common/funders
       */
      export namespace getFunders {
        export class Params {}

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScListData<defs.commonApi.FunderInfo>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<
            defs.commonApi.ScListData<defs.commonApi.FunderInfo>
          >
        >;
      }

      /**
       * 行业列表
       * /api/ctsSaaS/front/common/industry
       */
      export namespace getThreeLevelIndustries {
        export class Params {}

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScListData<defs.commonApi.ParamsIndustry>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<
            defs.commonApi.ScListData<defs.commonApi.ParamsIndustry>
          >
        >;
      }

      /**
       * 生成key
       * /api/ctsSaaS/front/common/key
       */
      export namespace getKey {
        export class Params {}

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScBaseDataType<string>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<defs.commonApi.ScBaseDataType<string>>
        >;
      }

      /**
       * 判断key是否失效
       * /api/ctsSaaS/front/common/key/expired
       */
      export namespace keyExpired {
        export class Params {
          /** key */
          key: string;
        }

        export type Response = defs.commonApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.commonApi.ScResponse<void>>;
      }

      /**
       * 获取验证码
       * /api/ctsSaaS/front/common/phone/code
       */
      export namespace getCode {
        export class Params {
          /** phone */
          phone: string;
          /** smsCodeType */
          smsCodeType:
            | 'LOGIN'
            | 'REGISTER'
            | 'RETRIEVE_PASSWORD'
            | 'VERIFY_CODE';
        }

        export type Response = defs.commonApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.commonApi.ScResponse<void>>;
      }

      /**
       * 产品类型
       * /api/ctsSaaS/front/common/productType
       */
      export namespace getProductType {
        export class Params {}

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScListData<defs.commonApi.ProductTypeVo>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<
            defs.commonApi.ScListData<defs.commonApi.ProductTypeVo>
          >
        >;
      }

      /**
       * 地区列表
       * /api/ctsSaaS/front/common/province
       */
      export namespace getProvince {
        export class Params {}

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScListData<defs.commonApi.ParamsArea>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<
            defs.commonApi.ScListData<defs.commonApi.ParamsArea>
          >
        >;
      }

      /**
       * 根据字符串生成二维码
       * /api/ctsSaaS/front/common/qrCode
       */
      export namespace getQrCode {
        export class Params {
          /** str */
          str: string;
        }

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScBaseDataType<string>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<defs.commonApi.ScBaseDataType<string>>
        >;
      }

      /**
       * 获取二维码参数-前端使用
       * /api/ctsSaaS/front/common/qrParams
       */
      export namespace getQrParams {
        export class Params {
          /** key */
          key: string;
          /** u */
          u: string;
        }

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ObjectMap<string, string>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<defs.commonApi.ObjectMap<string, string>>
        >;
      }

      /**
       * 授权报告等级
       * /api/ctsSaaS/front/common/reportLevel
       */
      export namespace getReportLevel {
        export class Params {}

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScListData<defs.commonApi.ReportLevelVo>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<
            defs.commonApi.ScListData<defs.commonApi.ReportLevelVo>
          >
        >;
      }

      /**
       * 指标库
       * /api/ctsSaaS/front/common/target
       */
      export namespace target {
        export class Params {
          /** hot */
          hot?: boolean;
          /** userProductId */
          userProductId?: number;
        }

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.ScListData<defs.commonApi.CommonTargetLibraryResponse>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<
            defs.commonApi.ScListData<
              defs.commonApi.CommonTargetLibraryResponse
            >
          >
        >;
      }

      /**
       * 电子税局发票配置信息
       * /api/ctsSaaS/front/common/taxConfig
       */
      export namespace getTaxConfig {
        export class Params {
          /** creditAdviceId */
          creditAdviceId: number;
        }

        export type Response = defs.commonApi.ScResponse<boolean>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.commonApi.ScResponse<boolean>>;
      }

      /**
       * url转文件下载
       * /api/ctsSaaS/front/common/urlToFile
       */
      export namespace urlToFile {
        export class Params {
          /** fileUrl */
          fileUrl: string;
          /** filename */
          filename: string;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }

    /**
     * 前台-公共产品
     */
    export namespace commonProduct {
      /**
       * 分页列表
       * /api/ctsSaaS/front/common/product/page
       */
      export namespace page {
        export class Params {
          /** 地区 */
          area?: string;
          /** 资金方 */
          capitalSourceId?: number;
          /** 关键字 */
          keyword?: string;
          /** 产品类型 */
          typeId?: number;
        }

        export type Response = defs.commonApi.ScPageResponse<
          defs.commonApi.CommonProductPageResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScPageResponse<
            defs.commonApi.CommonProductPageResponse
          >
        >;
      }

      /**
       * 详情
       * /api/ctsSaaS/front/common/product/{commonProductId}
       */
      export namespace detail {
        export class Params {
          /** commonProductId */
          commonProductId: number;
        }

        export type Response = defs.commonApi.ScResponse<
          defs.commonApi.CommonProductDetailResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.commonApi.ScResponse<defs.commonApi.CommonProductDetailResponse>
        >;
      }

      /**
       * 复制到我的产品
       * /api/ctsSaaS/front/common/product/{commonProductId}/copy
       */
      export namespace copyToUserProduct {
        export class Params {
          /** commonProductId */
          commonProductId: number;
        }

        export type Response = defs.commonApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.commonApi.ScResponse<void>>;
      }

      /**
       * pdf上传
       * /api/ctsSaaS/front/common/product/{commonProductId}/pdf
       */
      export namespace commonProductPdf {
        export class Params {
          /** commonProductId */
          commonProductId: number;
        }

        export type Response = defs.commonApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.commonApi.PdfUrlRequest,
        ): Promise<defs.commonApi.ScResponse<void>>;
      }
    }
  }
}
