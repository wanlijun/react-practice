type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace productApi {
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
      infos?: Array<defs.productApi.CommonTargetLibraryInfo>;

      /** 指标类型 */
      type?: 'HOT' | 'CORP' | 'TAX' | 'INVOICE' | 'JUDICIAL';
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
      page?: defs.productApi.ScPage;
    }

    export class ScPageResponse<T0 = any> {
      /** code */
      code?: string;

      /** data */
      data?: defs.productApi.ScPageData<
        defs.productApi.UserProductPageResponse
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

    export class UserProductAddRequest {
      /** 申请人要求 */
      applicantRequirements?: string;

      /** 产品介绍 */
      description?: string;

      /** 企业要求 */
      enterpriseRequirement?: string;

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

      /** 最高额度 */
      maxCreditLine?: number;

      /** 产品名称 */
      name?: string;

      /** 产品类型Id */
      productTypeId?: number;

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
    }

    export class UserProductDetailResponse {
      /** 申请人要求 */
      applicantRequirements?: string;

      /** 展业区域 */
      areas?: string;

      /** 产品介绍 */
      description?: string;

      /** 企业要求 */
      enterpriseRequirement?: string;

      /** id */
      id?: number;

      /** 进件地址 */
      incomeUrl?: string;

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

      /** 最高额度 */
      maxCreditLine?: number;

      /** 产品名称 */
      name?: string;

      /** 产品编号 */
      productNo?: string;

      /** 产品类别Id */
      productTypeId?: number;

      /** 是否推荐 */
      recommend?: boolean;

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
      targetModel?: Array<defs.productApi.CommonTargetLibraryResponse>;

      /** 产品类别 */
      type?: string;
    }

    export class UserProductPageResponse {
      /** id */
      id?: number;

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

      /** 最高额度 */
      maxCreditLine?: number;

      /** 产品名称 */
      name?: string;

      /** 产品类别 */
      productType?: string;

      /** 是否推荐 */
      recommend?: boolean;

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

      /** 状态 */
      status?: string;
    }

    export class UserProductRequest {
      /** 申请人要求 */
      applicantRequirements?: string;

      /** 产品介绍 */
      description?: string;

      /** 企业要求 */
      enterpriseRequirement?: string;

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

      /** 最高额度 */
      maxCreditLine?: number;

      /** 产品名称 */
      name?: string;

      /** 产品类型Id */
      productTypeId?: number;

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
    }

    export class UserTargetInfo {
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

      /** 指标库ID */
      targetLibraryId?: number;

      /** 值 */
      value?: object;
    }

    export class UserTargetRequest {
      /** 指标 */
      targets?: Array<defs.productApi.UserTargetInfo>;
    }
  }
}

declare namespace API {
  export namespace productApi {
    /**
     * 前台-我的产品
     */
    export namespace userProduct {
      /**
       * 新增
       * /api/ctsSaaS/front/user/product/add
       */
      export namespace add {
        export class Params {}

        export type Response = defs.productApi.ScResponse<number>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.productApi.UserProductAddRequest,
        ): Promise<defs.productApi.ScResponse<number>>;
      }

      /**
       * 分页列表
       * /api/ctsSaaS/front/user/product/page
       */
      export namespace page {
        export class Params {
          /** 关键字 */
          keyword?: string;
        }

        export type Response = defs.productApi.ScPageResponse<
          defs.productApi.UserProductPageResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.productApi.ScPageResponse<
            defs.productApi.UserProductPageResponse
          >
        >;
      }

      /**
       * 详情
       * /api/ctsSaaS/front/user/product/{id}
       */
      export namespace detail {
        export class Params {
          /** ID */
          id: string;
        }

        export type Response = defs.productApi.ScResponse<
          defs.productApi.UserProductDetailResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.productApi.ScResponse<defs.productApi.UserProductDetailResponse>
        >;
      }

      /**
       * 修改
       * /api/ctsSaaS/front/user/product/{id}
       */
      export namespace update {
        export class Params {
          /** ID */
          id: string;
        }

        export type Response = defs.productApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.productApi.UserProductRequest,
        ): Promise<defs.productApi.ScResponse<void>>;
      }

      /**
       * 删除
       * /api/ctsSaaS/front/user/product/{id}
       */
      export namespace remove {
        export class Params {
          /** ID */
          id: string;
        }

        export type Response = defs.productApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.productApi.ScResponse<void>>;
      }

      /**
       * 上架/下架
       * /api/ctsSaaS/front/user/product/{id}/status
       */
      export namespace changeStatus {
        export class Params {
          /** ID */
          id: string;
        }

        export type Response = defs.productApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.productApi.ScResponse<void>>;
      }

      /**
       * 模型指标修改
       * /api/ctsSaaS/front/user/product/{id}/target
       */
      export namespace target {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.productApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.productApi.UserTargetRequest,
        ): Promise<defs.productApi.ScResponse<void>>;
      }
    }
  }
}
