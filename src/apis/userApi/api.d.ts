type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace userApi {
    export class AdviceReportConditionMatchInfo {
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
      productName?: string;

      /** 产品编号 */
      productNo?: string;

      /** 产品类型 */
      productTypeName?: string;

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

      /** 产品id */
      userProductId?: number;
    }

    export class AdviceReportConditionNotMatchInfo {
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

      /** 不匹配原因 */
      noMatchDetail?: Array<defs.userApi.AdviceReportNoMatchInfo>;

      /** 产品名称 */
      productName?: string;

      /** 产品编号 */
      productNo?: string;

      /** 产品类型 */
      productTypeName?: string;

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

      /** 产品id */
      userProductId?: number;
    }

    export class AdviceReportNoMatchInfo {
      /** 企业情况 */
      actual?: string;

      /** 产品要求 */
      required?: string;
    }

    export class AdviceReportNotJudgedInfo {
      /** 产品名称 */
      productName?: string;

      /** 未判断原因 */
      reason?: string;

      /** 不能执行的指标 */
      targetNames?: Array<string>;

      /** 产品id */
      userProductId?: number;
    }

    export class AdviceReportResponse {
      /** 条件符合 */
      conditionsMatch?: Array<defs.userApi.AdviceReportConditionMatchInfo>;

      /** 条件不符 */
      conditionsNotMatch?: Array<
        defs.userApi.AdviceReportConditionNotMatchInfo
      >;

      /** 未进行判断 */
      notJudged?: Array<defs.userApi.AdviceReportNotJudgedInfo>;
    }

    export class AdviceResponse {
      /** 报告类型 */
      collectType?: 'SJ' | 'SJ_ZJ';

      /** 创建时间 */
      createTs?: string;

      /** 创建人 */
      creator?: string;

      /** 创建人手机号 */
      creatorPhone?: string;

      /** 报告状态 */
      creditAdviceStatus?:
        | 'PENDING_AUTHORIZATION'
        | 'PENDING_TICKETS'
        | 'CREATED'
        | 'CREATING'
        | 'CANCELED';

      /** 统一社会信用代码 */
      creditCode?: string;

      /** 信用报告状态 */
      creditReportStatus?: 'CREATED' | 'CREATING' | 'FAILED';

      /** 企业名称 */
      enterpriseName?: string;

      /** 企业报告状态 */
      enterpriseReportStatus?: 'CREATED' | 'CREATING' | 'FAILED';

      /** id */
      id?: number;

      /** 是否需要发票信，即是否需要插件 */
      invoice?: boolean;

      /** 订单号 */
      orderNo?: string;

      /** pdfUrl */
      pdfUrl?: string;

      /** 失败原因 */
      reason?: string;

      /** 报告等级 */
      reportLevelName?: string;

      /** 报告生成时间 */
      reportTs?: string;

      /** 是否示例 */
      sample?: boolean;
    }

    export class ApplyBankVersionRequest {
      /** 申请人姓名 */
      applyName?: string;

      /** 所在银行 */
      bankName?: string;

      /** 所在城市 */
      city?: string;

      /** 手机号 */
      contactPhone?: string;
    }

    export class BannerInfoResponse {
      /** image */
      image?: string;

      /** seq */
      seq?: number;

      /** uri */
      uri?: string;
    }

    export class ChangePassWordRequest {
      /** 新密码(MD5) */
      newPwd?: string;

      /** 旧密码(MD5) */
      oldPwd?: string;

      /** 重复输入密码(MD5) */
      verifyPwd?: string;
    }

    export class ConsumeRecordResponse {
      /** 消费点数 */
      consumerPoints?: number;

      /** 消费时间 */
      createdTime?: string;

      /** 企业名称 */
      enterpriseName?: string;

      /** 消费流水号 */
      number?: string;

      /** 是否扣费 */
      whetherDeduction?: boolean;
    }

    export class CreditAdviceRequest {
      /** 报告状态 */
      creditAdviceStatus?: Array<string>;

      /** 企业名称 */
      enterpriseName?: string;

      /** 报告等级id */
      reportLevelIds?: Array<number>;
    }

    export class RechargeRecordResponse {
      /** 充值金额 */
      amount?: number;

      /** 充值时间 */
      createdTime?: string;

      /** 充值点数 */
      points?: number;

      /** 充值方式 */
      rechargeType?: 'ADMIN' | 'WX';

      /** 充值流水号 */
      serialNumber?: string;

      /** 充值状态 */
      status?: 'SUCCESS' | 'FAIL';
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
      page?: defs.userApi.ScPage;
    }

    export class ScPageResponse<T0 = any> {
      /** code */
      code?: string;

      /** data */
      data?: defs.userApi.ScPageData<defs.userApi.AdviceResponse>;

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

    export class UserBackPasswordRequest {
      /** 密码(MD5) */
      password?: string;

      /** 手机号 */
      phone?: string;

      /** 短信验证码 */
      smsCode?: string;

      /** 重复输入密码(MD5) */
      verifyPassword?: string;
    }

    export class UserBaseInfoResponse {
      /** 是否展示银行版 */
      bankVersion?: boolean;

      /** 城市 */
      city?: string;

      /** id */
      id?: number;

      /** 是否有进件权限 */
      income?: boolean;

      /** 姓名 */
      name?: string;

      /** 手机号 */
      phone?: string;

      /** 省 */
      province?: string;

      /** 账户余额 */
      remainPoints?: number;
    }

    export class UserBaseRequest {
      /** 密码(MD5) */
      password?: string;

      /** 手机号 */
      phone?: string;
    }

    export class UserInfoExternalResponse {
      /** 是否展示银行版 */
      bankVersion?: boolean;

      /** 城市 */
      city?: string;

      /** id */
      id?: number;

      /** 身份证（已加密） */
      idCard?: string;

      /** 是否有进件权限 */
      income?: boolean;

      /** 姓名 */
      name?: string;

      /** 密码 */
      password?: string;

      /** 手机号 */
      phone?: string;

      /** 省 */
      province?: string;

      /** 账户余额 */
      remainPoints?: number;
    }

    export class UserLoginCodeRequest {
      /** 验证码 */
      code?: string;

      /** 手机号 */
      phone?: string;
    }

    export class UserRegisterRequest {
      /** 所在城市 */
      city?: string;

      /** 姓名 */
      name?: string;

      /** 密码(MD5) */
      password?: string;

      /** 手机号 */
      phone?: string;

      /** 短信验证码 */
      smsCode?: string;

      /** 重复输入密码(MD5) */
      verifyPassword?: string;
    }

    export class WatermarkRequest {
      /** 内容 */
      content?: string;
    }

    export class WatermarkResponse {
      /** 内容 */
      content?: string;
    }
  }
}

declare namespace API {
  export namespace userApi {
    /**
     * 前台-信贷建议
     */
    export namespace adminCreditAdvice {
      /**
       * 信贷建议列表
       * /api/ctsSaaS/admin/advice/page
       */
      export namespace page {
        export class Params {}

        export type Response = defs.userApi.ScPageResponse<
          defs.userApi.AdviceResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.userApi.CreditAdviceRequest,
        ): Promise<defs.userApi.ScPageResponse<defs.userApi.AdviceResponse>>;
      }

      /**
       * 信贷建基本信息
       * /api/ctsSaaS/admin/advice/{id}/info
       */
      export namespace info {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.userApi.ScResponse<
          defs.userApi.AdviceResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.userApi.ScResponse<defs.userApi.AdviceResponse>>;
      }

      /**
       * 信用报告
       * /api/ctsSaaS/admin/advice/{id}/report
       */
      export namespace report {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.userApi.ScResponse<
          defs.userApi.AdviceReportResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.userApi.ScResponse<defs.userApi.AdviceReportResponse>>;
      }
    }

    /**
     * 前台-s首页
     */
    export namespace index {
      /**
       * banner获取
       * /api/ctsSaaS/front/index/banner
       */
      export namespace getIndexBanner {
        export class Params {}

        export type Response = defs.userApi.ScResponse<
          defs.userApi.ScListData<defs.userApi.BannerInfoResponse>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.userApi.ScResponse<
            defs.userApi.ScListData<defs.userApi.BannerInfoResponse>
          >
        >;
      }
    }

    /**
     * 前台-用户
     */
    export namespace user {
      /**
       * 申请开通银行版本
       * /api/ctsSaaS/front/user/applyBankVersion
       */
      export namespace applyBankVersion {
        export class Params {}

        export type Response = defs.userApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.userApi.ApplyBankVersionRequest,
        ): Promise<defs.userApi.ScResponse<void>>;
      }

      /**
       * 修改密码
       * /api/ctsSaaS/front/user/changePassWord
       */
      export namespace changePassWord {
        export class Params {}

        export type Response = defs.userApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.userApi.ChangePassWordRequest,
        ): Promise<defs.userApi.ScResponse<void>>;
      }

      /**
       * 消费记录列表
       * /api/ctsSaaS/front/user/consumeRecord/page
       */
      export namespace consumptionPage {
        export class Params {
          /** 结束时间 */
          endTime?: string;
          /** 开始时间 */
          startTime?: string;
        }

        export type Response = defs.userApi.ScPageResponse<
          defs.userApi.ConsumeRecordResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.userApi.ScPageResponse<defs.userApi.ConsumeRecordResponse>
        >;
      }

      /**
       * 累计消费条数
       * /api/ctsSaaS/front/user/consumeRecord/total
       */
      export namespace consumptionTotal {
        export class Params {
          /** 结束时间 */
          endTime?: string;
          /** 开始时间 */
          startTime?: string;
        }

        export type Response = defs.userApi.ScResponse<number>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.userApi.ScResponse<number>>;
      }

      /**
       * 基本信息
       * /api/ctsSaaS/front/user/info
       */
      export namespace information {
        export class Params {}

        export type Response = defs.userApi.ScResponse<
          defs.userApi.UserBaseInfoResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.userApi.ScResponse<defs.userApi.UserBaseInfoResponse>>;
      }

      /**
       * 登录-验证码登录
       * /api/ctsSaaS/front/user/loginByCode
       */
      export namespace loginByCode {
        export class Params {}

        export type Response = defs.userApi.ScResponse<
          defs.userApi.UserBaseInfoResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.userApi.UserLoginCodeRequest,
        ): Promise<defs.userApi.ScResponse<defs.userApi.UserBaseInfoResponse>>;
      }

      /**
       * 登录-密码登录
       * /api/ctsSaaS/front/user/loginByPwd
       */
      export namespace loginByPwd {
        export class Params {}

        export type Response = defs.userApi.ScResponse<
          defs.userApi.UserBaseInfoResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.userApi.UserBaseRequest,
        ): Promise<defs.userApi.ScResponse<defs.userApi.UserBaseInfoResponse>>;
      }

      /**
       * 用户登出
       * /api/ctsSaaS/front/user/logout
       */
      export namespace logout {
        export class Params {}

        export type Response = defs.userApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.userApi.ScResponse<void>>;
      }

      /**
       * 充值记录列表
       * /api/ctsSaaS/front/user/rechargeRecord/page
       */
      export namespace payPage {
        export class Params {
          /** 结束时间 */
          endTime?: string;
          /** 搜索关键字 */
          searchWord?: string;
          /** 开始时间 */
          startTime?: string;
          /** 充值状态 */
          status?: 'SUCCESS' | 'FAIL';
        }

        export type Response = defs.userApi.ScPageResponse<
          defs.userApi.RechargeRecordResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.userApi.ScPageResponse<defs.userApi.RechargeRecordResponse>
        >;
      }

      /**
       * 注册
       * /api/ctsSaaS/front/user/register
       */
      export namespace register {
        export class Params {}

        export type Response = defs.userApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.userApi.UserRegisterRequest,
        ): Promise<defs.userApi.ScResponse<void>>;
      }

      /**
       * 找回密码
       * /api/ctsSaaS/front/user/restPwd
       */
      export namespace restPwd {
        export class Params {}

        export type Response = defs.userApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.userApi.UserBackPasswordRequest,
        ): Promise<defs.userApi.ScResponse<void>>;
      }
    }

    /**
     * 用户
     */
    export namespace userExternal {
      /**
       * 获取基本信息-共外部使用(phone需要使用securityService加密传输)
       * /api/ctsSaaS/front/external/user/info
       */
      export namespace information {
        export class Params {
          /** phone */
          phone: string;
        }

        export type Response = defs.userApi.ScResponse<
          defs.userApi.UserInfoExternalResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.userApi.ScResponse<defs.userApi.UserInfoExternalResponse>
        >;
      }
    }

    /**
     * 用户水印文案
     */
    export namespace watermark {
      /**
       * 获取用户水印文案
       * /api/ctsSaaS/front/watermark
       */
      export namespace getContent {
        export class Params {}

        export type Response = defs.userApi.ScResponse<
          defs.userApi.WatermarkResponse
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.userApi.ScResponse<defs.userApi.WatermarkResponse>>;
      }

      /**
       * 修改保存
       * /api/ctsSaaS/front/watermark/save
       */
      export namespace save {
        export class Params {}

        export type Response = defs.userApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.userApi.WatermarkRequest,
        ): Promise<defs.userApi.ScResponse<void>>;
      }
    }
  }
}
