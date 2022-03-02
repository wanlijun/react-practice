type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace adminApi {
    export class AbnormalOperationInfoVo {
      /** 列入名录原因 <-【经营异常】 */
      listedCause?: string;

      /** 列入日期 */
      listedDate?: string;

      /** 移除名录原因 */
      removeCause?: string;

      /** 移除日期 */
      removeDate?: string;
    }

    export class AddUserToOrgChannelRequest {
      /** 渠道Id */
      channelId?: number;

      /** 用户Id */
      userId?: number;
    }

    export class AdminAddRequest {
      /** 姓名 */
      name?: string;

      /** 机构id */
      orgId?: number;

      /** 手机号 */
      phone?: string;

      /** 角色id */
      roleId?: number;
    }

    export class AdminAdvicePageResponse {
      /** 消费点数 */
      consumerPoints?: number;

      /** 创建时间 */
      createTs?: string;

      /** 报告状态 */
      creditAdviceStatus?:
        | 'PENDING_AUTHORIZATION'
        | 'PENDING_TICKETS'
        | 'CREATED'
        | 'CREATING'
        | 'CANCELED';

      /** 统一社会信用代码 */
      creditCode?: string;

      /** 企业名称 */
      enterpriseName?: string;

      /** id */
      id?: number;

      /** 更新时间 */
      lastModifiedTs?: string;

      /** pdfurl */
      pdfUrl?: string;

      /** 用户手机号 */
      phone?: string;

      /** 是否使用插件 */
      plugin?: boolean;

      /** 报告等级 */
      reportLevelName?: string;

      /** 所属用户 */
      username?: string;
    }

    export class AdminAdviceRecordResponse {
      /** 取消的时间 */
      cancelTs?: string;

      /** 创建时间 */
      createTs?: string;

      /** 电子税局授权时间 */
      electronicTaxTs?: string;

      /** 企业名称 */
      enterpriseName?: string;

      /** id */
      id?: number;

      /** 插件采集成功时间 */
      pluginTs?: string;

      /** 失败原因 */
      reason?: string;

      /** 报告生成时间 */
      reportTs?: string;
    }

    export class AdminDetailResponse {
      /** id */
      id?: number;

      /** 姓名 */
      name?: string;

      /** 机构id */
      orgId?: number;

      /** 手机号 */
      phone?: string;

      /** 角色id */
      roleId?: number;
    }

    export class AdminInfoResponse {
      /** 后台账号类型 */
      adminType?: 'ADMIN' | 'CHANNEL';

      /** id */
      id?: number;

      /** 姓名 */
      name?: string;

      /** 权限码 */
      permissionCodes?: Array<string>;

      /** 手机号 */
      phone?: string;

      /** 状态 */
      status?: 'ENABLE' | 'DISABLE';
    }

    export class AdminPageResponse {
      /** id */
      id?: number;

      /** 更新时间 */
      lastModifiedTs?: string;

      /** 姓名 */
      name?: string;

      /** 所属部门 */
      orgName?: string;

      /** 手机号 */
      phone?: string;

      /** 所属角色 */
      roleName?: string;

      /** 状态 */
      status?: 'ENABLE' | 'DISABLE';
    }

    export class AdminRechargeRecordResponse {
      /** 充值后剩余点数 */
      afterPoints?: number;

      /** 充值前剩余点数 */
      beforePoints?: number;

      /** 充值时间 */
      createdTime?: string;

      /** 操作人用户名 */
      creatorName?: string;

      /** 操作人账号 */
      creatorPhone?: string;

      /** id */
      id?: number;

      /** 用户手机号 */
      phone?: string;

      /** 充值点数 */
      points?: number;

      /** 充值流水号 */
      serialNumber?: string;

      /** 所属用户 */
      username?: string;
    }

    export class AdminResourceTreeResponse {
      /** child */
      child?: Array<defs.adminApi.AdminResourceTreeResponse>;

      /** 资源代码 */
      code?: string;

      /** id */
      id?: number;

      /** 资源名称 */
      name?: string;

      /** 父资源 */
      parentId?: number;
    }

    export class AdminUpdateRequest {
      /** 机构id */
      orgId?: number;

      /** 角色id */
      roleId?: number;
    }

    export class AdminUserProductPageResponse {
      /** id */
      id?: number;

      /** 利率最大值 */
      interestRateMax?: number;

      /** 利率最小值 */
      interestRateMin?: number;

      /** 利率类型 */
      interestRateType?: 'DAY' | 'MONTH' | 'YEAR';

      /** 更新时间 */
      lastModifiedTs?: string;

      /** 借款周期结束 */
      loanPeriodEnd?: number;

      /** 借款周期开始 */
      loanPeriodStart?: number;

      /** 最高额度 */
      maxCreditLine?: number;

      /** 产品名称 */
      name?: string;

      /** 用户手机号 */
      phone?: string;

      /** 产品类别 */
      productType?: string;

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
      status?: 'UPPER_SHELF' | 'OFF_SHELF';

      /** 所属用户 */
      username?: string;
    }

    export class AlterInfoVo {
      /** 变更时间（年） */
      altDate?: string;

      /** 法人变更次数 */
      legalPersonAltCnt?: string;

      /** 股东变更次数 */
      shareholderAltCnt?: string;
    }

    export class AlterStatusVo {
      /** 变更后 */
      altAf?: string;

      /** 变更前 */
      altBe?: string;

      /** 变更日 */
      altDate?: string;

      /** 变更项目 */
      altItem?: string;
    }

    export class ApplyAuditRequest {
      /** 驳回原因 */
      cause?: string;
    }

    export class ApplyPageResponse {
      /** 审核状态 */
      auditStatus?: 'PENDING' | 'APPROVED' | 'REJECTED';

      /** 城市 */
      city?: string;

      /** 申请时间 */
      createdTs?: string;

      /** id */
      id?: number;

      /** 更新时间 */
      lastModifiedTs?: string;

      /** 姓名 */
      name?: string;

      /** 所属机构 */
      orgName?: string;

      /** 手机号 */
      phone?: string;

      /** 省 */
      province?: string;

      /** 账户余额 */
      remainPoints?: number;

      /** 用户来源 */
      source?: 'YRT' | 'YD';

      /** 用户类型 */
      type?: string;

      /** 用户id */
      userId?: number;
    }

    export class BankTaxInteractionVo {
      /** 查询银行 */
      bankName?: string;

      /** 查询日期 */
      queryDate?: string;
    }

    export class BasicInfoVo {
      /** 注册地址 */
      address?: string;

      /** 法人年龄 */
      age?: string;

      /** 实缴资本 */
      capito?: string;

      /** 企业名称 */
      enterpriseName?: string;

      /** 登记状态 */
      enterpriseStatus?: string;

      /** 企业类型 */
      enterpriseType?: string;

      /** 登记日期 */
      esDate?: string;

      /** 法人持股比例 */
      frcgbl?: string;

      /** 所属行业 */
      industry?: string;

      /** 法定代表人 */
      legalPersonName?: string;

      /** 经营范围 */
      operateScope?: string;

      /** 注册资本 */
      regCap?: string;

      /** 注册资本币种 */
      regCapCur?: string;

      /** 登记机关 */
      regOrg?: string;

      /** 统一社会信用代码 */
      socialCreditIdentifier?: string;
    }

    export class ChannelTransferRequest {
      /** 渠道Id */
      channelId?: number;

      /** ids */
      ids?: Array<number>;
    }

    export class ChannelUserPageResponse {
      /** 渠道ids */
      channelIds?: Array<number>;

      /** 所属渠道 */
      channelName?: string;

      /** 所在市 */
      city?: string;

      /** 已使用点数 */
      consumerPoints?: number;

      /** id */
      id?: number;

      /** 姓名 */
      name?: string;

      /** 手机号 */
      phone?: string;

      /** 所在省 */
      province?: string;

      /** 注册时间 */
      regTime?: string;

      /** 剩余点数 */
      remainPoints?: number;

      /** 账号状态 */
      status?: 'ENABLE' | 'DISABLE';

      /** 用户类型 */
      type?: string;

      /** 用户Id */
      userId?: number;
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

      /** 资金方Id */
      funderId?: number;

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

      /** 状态 */
      status?: 'UPPER_SHELF' | 'OFF_SHELF';

      /** 模型指标 */
      targetModel?: Array<defs.adminApi.CommonTargetLibraryResponse>;

      /** 产品类型 */
      type?: string;
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
      infos?: Array<defs.adminApi.CommonTargetLibraryInfo>;

      /** 指标类型 */
      type?: 'HOT' | 'CORP' | 'TAX' | 'INVOICE' | 'JUDICIAL';
    }

    export class CompanyBaseInfoExt {
      /** 申请资金类型 */
      applyCapitalType?: 'APPRECIATION_EXPANSION' | 'EQUITY_TRANSFER' | 'OTHER';

      /** 所在区 */
      area?: string;

      /** 资金用途 */
      capitalPurpose?: 'SUPPLEMENTARY_CAPITAL' | 'PROJECT_FINANCING';

      /** 所在市 */
      city?: string;

      /** 企业名称 */
      companyName?: string;

      /** 联系人手机号 */
      contactPhone?: string;

      /** 社会统一信用代码 */
      creditCode?: string;

      /** 企业经济类型 */
      economicType?:
        | 'STATE_OWNED'
        | 'COLLECTIVE'
        | 'PRIVATE'
        | 'INDIVIDUAL'
        | 'TIE_UPS'
        | 'STOCK_SYSTEM'
        | 'FOREIGN_INVEST'
        | 'GAT_INVEST'
        | 'OTHER';

      /** 企业人员数量 */
      employees?: number;

      /** 融资金额 */
      financingAmount?: string;

      /** 企业所属行业 */
      industry?: string;

      /** 主营业务 */
      mainBusiness?: string;

      /** 主营产品 */
      mainProduct?: string;

      /** 企业净资产（万元） */
      netAssets?: string;

      /** 企业净利润（万元） */
      netProfit?: string;

      /** 所在省 */
      province?: string;

      /** 报告生成时间 */
      reportCreatedTime?: string;

      /** 企业销售收入（万元） */
      salesRevenue?: string;

      /** 是否规上企业 */
      scale?: boolean;

      /** 企业纳税金额（万元） */
      taxAmount?: string;

      /** 企业总资产（万元） */
      totalAssets?: string;

      /** 企业总负债（万元） */
      totalLiability?: string;
    }

    export class CompanyCollectDetailResponse {
      /** 企业基本信息 */
      companyBaseInfo?: defs.adminApi.CompanyBaseInfoExt;

      /** 项目信息 */
      projectInfo?: defs.adminApi.ProjectBaseInfo;
    }

    export class CompanyCollectPageResponse {
      /** 所在区 */
      area?: string;

      /** 授权时间 */
      authTime?: string;

      /** 所在市 */
      city?: string;

      /** 企业名称 */
      companyName?: string;

      /** 建设状况 */
      construction?: string;

      /** 联系人手机号 */
      contactPhone?: string;

      /** 创建时间 */
      createdTs?: string;

      /** 统一社会信用代码 */
      creditCode?: string;

      /** 融资金额(万元) */
      financingAmount?: string;

      /** ID */
      id?: number;

      /** 企业所属行业 */
      industry?: string;

      /** 项目名称 */
      projectName?: string;

      /** 企业所属城市(省份) */
      province?: string;

      /** 报告pdf URL */
      reportPdfUrl?: string;

      /** 状态 */
      status?: 'PENDING_AUTHORIZATION' | 'CREATING' | 'CREATED' | 'CANCELED';

      /** 项目总投资(万元) */
      totalInvestAmount?: string;
    }

    export class CourtDishonestyInfoVo {
      /** 案号 */
      caseCode?: string;

      /** 被执行人履行情况 */
      caseStatus?: string;

      /** 执行时间 <-【企业失信被执行】 */
      publishDate?: string;
    }

    export class CourtExecuteInfoVo {
      /** 案号 */
      caseCode?: string;

      /** 执行时间 <-【企业被执行】 */
      caseCreateDate?: string;

      /** 案件状态 */
      caseStatus?: string;
    }

    export class CourtNegtiveAnalysisVo {
      /** 企业失信被执行次数 */
      dishonestyCnt?: string;

      /** 企业被执行次数 */
      executeCnt?: string;

      /** 年度 <-【司法负面统计】 */
      year?: string;
    }

    export class CreditAdviceCompanyReportResponse {
      /** 经营异常信息 */
      abnormalOperationInfo?: Array<defs.adminApi.AbnormalOperationInfoVo>;

      /** 股东变更信息 */
      alterInfo?: Array<defs.adminApi.AlterInfoVo>;

      /** 工商变更记录 */
      alterStatus?: Array<defs.adminApi.AlterStatusVo>;

      /** 银税互动 */
      bankTaxInteraction?: Array<defs.adminApi.BankTaxInteractionVo>;

      /** 基本消息 */
      basicInfo?: defs.adminApi.BasicInfoVo;

      /** 企业失信被执行信息 */
      courtDishonestyInfo?: Array<defs.adminApi.CourtDishonestyInfoVo>;

      /** 企业被执行信息 */
      courtExecuteInfo?: Array<defs.adminApi.CourtExecuteInfoVo>;

      /** 司法负面统计 */
      courtNegtiveAnalysis?: Array<defs.adminApi.CourtNegtiveAnalysisVo>;

      /** 股权冻结信息 */
      equityFreezeInfo?: Array<defs.adminApi.EquityFreezeInfoVo>;

      /** 对外投资 */
      invest?: Array<defs.adminApi.InvestVo>;

      /** 近24个月每个月开票金额及张数 */
      invoiceAmtLast24m?: Array<defs.adminApi.InvoiceAmtLast24mVo>;

      /** 开票分析 */
      invoiceInfo?: Array<defs.adminApi.InvoicingAnalysisVo>;

      /** 主要成员 */
      managerInfo?: Array<defs.adminApi.ManagerInfoVo>;

      /** 负面信息 */
      negtiveInfo?: defs.adminApi.NegtiveInfoVo;

      /** 没有数据标记 */
      noDataFlag?: defs.adminApi.NoDataFlagVo;

      /** 行政处罚信息 */
      punishInfo?: Array<defs.adminApi.PunishInfoVo>;

      /** 企业主基本信息 */
      qyzInfo?: defs.adminApi.QyzbasicInfo;

      /** 企业主借贷信息 */
      qyzdebtInfo?: defs.adminApi.QyzdebtInfoVo;

      /** 企业主消费信息 */
      qyzspendInfo?: defs.adminApi.QyzspendInfoVo;

      /** 企业主交易信息 */
      qyztradeInfo?: defs.adminApi.QyztradeInfoVo;

      /** 工商负面统计 */
      saicNegtiveAnalysis?: Array<defs.adminApi.SaicNegtiveAnalysisVo>;

      /** 严重失信违法信息 */
      seriousDishonestyInfo?: Array<defs.adminApi.SeriousDishonestyInfoVo>;

      /** 股东信息 */
      shareholderInfo?: Array<defs.adminApi.ShareholderInfoVo>;

      /** 税务banner信息 */
      taxBannerInfo?: defs.adminApi.TaxBannerInfoVo;

      /** 发票信息A信息-纳税分析 */
      taxInfoA?: Array<defs.adminApi.TaxInfoAVo>;

      /** 发票信息B信息-纳税信息 */
      taxInfoB?: Array<defs.adminApi.TaxInfoBVo>;

      /** 发票信息B信息-纳税信息 */
      yssr?: Array<defs.adminApi.YssrVo>;

      /** 综合评估 */
      zhEvaluation?: Array<defs.adminApi.ZhEvaluationVo>;

      /** 最近开票信息 */
      zjkp?: defs.adminApi.InvoicingZjkpVo;
    }

    export class DataPermissionVo {
      /** id */
      id?: number;

      /** 数据权限名称 */
      name?: string;

      /** 数据权限类型：CURRENT_ACCOUNT:本账号,CURRENT_DEPT:本部门，SUB_DEPT:子部门，ALL_SUB_DEPT:所有子部门 */
      type?: 'CURRENT_ACCOUNT' | 'CURRENT_DEPT' | 'SUB_DEPT' | 'ALL_SUB_DEPT';
    }

    export class DelayInfoVo {
      /** 近14天是否有逾期记录 */
      yq14day?: string;

      /** 近1天是否有逾期记录 */
      yq1day?: string;

      /** 近30天是否有逾期记录 */
      yq30day?: string;

      /** 近7天是否有逾期记录 */
      yq7day?: string;

      /** 当前逾期金额 */
      yqje?: string;

      /** 当前逾期机构数 */
      yqjgs?: string;
    }

    export class EquityFreezeInfoVo {
      /** 股权数额 */
      equityAmt?: string;

      /** 被执行人 <-【股权冻结】 */
      executePersonName?: string;

      /** 冻结期限自 */
      freezeFrom?: string;

      /** 冻结期限至 */
      freezeTo?: string;
    }

    export class GlqyInfoVo {
      /** 作为被告次数 */
      glBgcs?: string;

      /** 被执行次数 */
      glBzx?: string;

      /** 失信被执行次数 */
      glSxbzx?: string;

      /** 作为原告次数 */
      glYgcs?: string;

      /** 年度 */
      nd?: string;
    }

    export class InvestVo {
      /** 投资比例 */
      fundedRatio?: string;

      /** 认缴出资额 */
      investCur?: string;

      /** 被投资企业名称 */
      investName?: string;

      /** 投资金额 */
      subConam?: string;
    }

    export class InvoiceAmtLast24mVo {
      /** 日期 */
      date?: string;

      /** 金额 */
      je?: string;

      /** 张数 */
      num?: string;
    }

    export class InvoicingAnalysisVo {
      /** 近12个月 */
      m12?: string;

      /** 近24个月 */
      m24?: string;

      /** 近3个月 */
      m3?: string;

      /** 近6个月 */
      m6?: string;

      /** 指标 */
      zb?: string;
    }

    export class InvoicingZjkpVo {
      /** 近12个月开票月份数 */
      invoicedMonthCntLast12m?: string;

      /** 近6个月开票月份数 */
      invoicedMonthCntLast6m?: string;

      /** 发票开具数 */
      invoicehcration?: string;

      /** 近45日是否有开票记录 */
      invoicelast45days?: string;

      /** 近60日是否有开票记录 */
      invoicelast60days?: string;

      /** 近12个月未开票月份数 */
      invoiceno12m?: string;

      /** 近12个月是否有未开票月份 */
      invoiceyesno12m?: string;

      /** 最近开票日期 */
      lastInvoiceDate?: string;
    }

    export class JgAnalysisVo {
      /** 金额不足交易失败比例 */
      jebzSbjybl?: string;

      /** 持牌消金平台机构数 */
      jgsCpxj?: string;

      /** 互联网信贷平台机构数 */
      jgsHlw?: string;

      /** 历史信贷平台交易失败笔数 */
      jysbbsXdpt?: string;

      /** 历史信贷平台总机构数 */
      lsjgsXdpt?: string;

      /** 已结清信贷平台构数 */
      yjqjgsXdpt?: string;
    }

    export class JyjjDayVo {
      /** 机构 */
      zb?: string;

      /** 最近交易距今天数 */
      zjjy?: string;

      /** 最早交易距今天数 */
      zzjy?: string;
    }

    export class LogResponse {
      /** 操作内容 */
      cause?: string;

      /** 操作人用户名 */
      creatorName?: string;

      /** 操作人账号 */
      creatorPhone?: string;

      /** id */
      id?: number;

      /** 操作时间 */
      lastModifiedTs?: string;
    }

    export class ManagerInfoVo {
      /** 姓名 */
      managerName?: string;

      /** 职位 */
      managerPosition?: string;
    }

    export class NegtiveInfoVo {
      /** 企业主逾期信息 */
      delayInfo?: defs.adminApi.DelayInfoVo;

      /** 关联企业司法负面统计 */
      glqyInfo?: Array<defs.adminApi.GlqyInfoVo>;

      /** 企业司法负面统计 */
      qyInfo?: Array<defs.adminApi.QyInfoVo>;

      /** 企业主司法负面统计 */
      qyzInfo?: Array<defs.adminApi.QyzInfoVo>;
    }

    export class NoDataFlagVo {
      /** 银税互动数据 */
      bankTaxInteraction?: boolean;

      /** 发票数据 */
      invoice?: boolean;
    }

    export class OrgChannelListResponse {
      /** child */
      child?: Array<defs.adminApi.OrgChannelListResponse>;

      /** id */
      id?: number;

      /** 名称 */
      name?: string;

      /** 父级机构Id */
      parentId?: number;
    }

    export class OrgChannelSaveRequest {
      /** 名称 */
      name?: string;

      /** 父级机构Id */
      parentId?: number;
    }

    export class PdfUrlRequest {
      /** pdfurl */
      pdfUrl?: string;
    }

    export class PermissionResponse {
      /** 数据权限 */
      dataPermissionList?: Array<defs.adminApi.DataPermissionVo>;

      /** 资源权限 */
      resourceList?: Array<defs.adminApi.AdminResourceTreeResponse>;
    }

    export class ProductAddRequest {
      /** 申请人要求 */
      applicantRequirements?: string;

      /** 产品介绍 */
      description?: string;

      /** 企业要求 */
      enterpriseRequirement?: string;

      /** 资金方Id */
      funderId?: number;

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

    export class ProductPageResponse {
      /** 是否银行用户暂时 */
      bankVersion?: boolean;

      /** 产品id */
      id?: number;

      /** 利率最大值 */
      interestRateMax?: number;

      /** 利率最小值 */
      interestRateMin?: number;

      /** 利率类型 */
      interestRateType?: 'DAY' | 'MONTH' | 'YEAR';

      /** 更新时间 */
      lastModifiedTs?: string;

      /** 借款周期结束 */
      loanPeriodEnd?: number;

      /** 借款周期开始 */
      loanPeriodStart?: number;

      /** 最高额度 */
      maxCreditLine?: number;

      /** 产品名称 */
      name?: string;

      /** 产品类型 */
      productTypeName?: string;

      /** 是否推荐 */
      recommend?: boolean;

      /** 还款方式 */
      repaymentMethod?: string;

      /** 状态 */
      status?: 'UPPER_SHELF' | 'OFF_SHELF';
    }

    export class ProjectBaseInfo {
      /** 建设地点-所在市 */
      city?: string;

      /** 建设状况 */
      construction?: string;

      /** 经济效益 */
      economicEffect?: string;

      /** 固定资产投资(万元) */
      fixedAssetsInvestAmount?: string;

      /** 建设内容 */
      projectContent?: string;

      /** 项目名称 */
      projectName?: string;

      /** 项目手续情况 */
      projectProcedures?: Array<defs.adminApi.ProjectProcedureInfo>;

      /** 建设地点-所在省 */
      province?: string;

      /** 拟开工时间 */
      scheduledDate?: string;

      /** 资金来源 */
      sourcesFunds?: string;

      /** 拟完工时间 */
      toBeCompletedDate?: string;

      /** 总投资(万元) */
      totalInvestAmount?: string;
    }

    export class ProjectProcedureInfo {
      /** type */
      type?: string;

      /** url */
      url?: string;
    }

    export class PunishInfoVo {
      /** 决定书文号 <-【行政处罚】 */
      caseCode?: string;

      /** 处罚内容 */
      punishContent?: string;

      /** 决定日期 */
      punishDate?: string;

      /** 处罚原因 */
      punishType?: string;
    }

    export class QyInfoVo {
      /** 年度 */
      nd?: string;

      /** 作为被告次数 */
      qyBgcs?: string;

      /** 被执行次数 */
      qyBzx?: string;

      /** 失信被执行次数 */
      qySxbzx?: string;

      /** 作为原告次数 */
      qyYgcs?: string;
    }

    export class QyzInfoVo {
      /** 年度 */
      nd?: string;

      /** 作为被告次数 */
      qyzBgcs?: string;

      /** 被执行次数 */
      qyzBzx?: string;

      /** 失信被执行次数 */
      qyzSxbzx?: string;

      /** 限高消费记录 */
      qyzXg?: string;

      /** 作为原告次数 */
      qyzYgcs?: string;
    }

    export class QyzbasicInfo {
      /** 企业主类型 */
      czje3m?: string;

      /** 企业主姓名 */
      name?: string;
    }

    export class QyzdebtInfoVo {
      /** 借贷机构分析 */
      jgAnalysis?: defs.adminApi.JgAnalysisVo;

      /** 借贷机构 */
      jyjjDay?: Array<defs.adminApi.JyjjDayVo>;

      /** 信贷平台分析 */
      xdptAnalysis?: Array<defs.adminApi.ZbMonthInfo>;
    }

    export class QyzspendInfoVo {
      /** 企业主消费信息 */
      qyzspend?: Array<defs.adminApi.ZbMonthInfo>;

      /** 单笔消费金额分析 */
      xfjeAnalysis?: Array<defs.adminApi.ZbMonthInfo>;
    }

    export class QyztradeInfoVo {
      /** 企业主出入账信息 */
      crzInfo?: Array<defs.adminApi.ZbMonthInfo>;

      /** 企业主交易信息 */
      qyzTradeInfo?: Array<defs.adminApi.ZbMonthInfo>;

      /** 最近一笔失败交易距今天数 */
      sbjyjjts?: string;
    }

    export class RechargeRecordResponse {
      /** 充值后剩余点数 */
      afterPoints?: number;

      /** 充值前剩余点数 */
      beforePoints?: number;

      /** 充值时间 */
      createdTime?: string;

      /** 操作人用户名 */
      creatorName?: string;

      /** 操作人账号 */
      creatorPhone?: string;

      /** id */
      id?: number;

      /** 充值点数 */
      points?: number;

      /** 充值流水号 */
      serialNumber?: string;
    }

    export class RoleDetailResponse {
      /** 资源权限Id */
      adminPermissions?: Array<number>;

      /** id */
      id?: number;

      /** 角色名称 */
      name?: string;

      /** 描述 */
      remark?: string;
    }

    export class RoleInfoResponse {
      /** id */
      id?: number;

      /** 角色名称 */
      name?: string;
    }

    export class RolePageResponse {
      /** id */
      id?: number;

      /** 更新时间 */
      lastModifiedTs?: string;

      /** 角色名称 */
      name?: string;

      /** 角色状态 */
      status?: 'ENABLE' | 'DISABLE';
    }

    export class RoleRequest {
      /** 角色名称 */
      name?: string;

      /** 角色描述 */
      remark?: string;

      /** 资源id */
      resourceIds?: Array<number>;
    }

    export class SaicNegtiveAnalysisVo {
      /** 工商经营异常 */
      abnormalOperationCnt?: string;

      /** 行政处罚 */
      punishCnt?: string;

      /** 严重违法 */
      seriousDishonestyCnt?: string;

      /** 股权冻结 */
      stockFreezeCnt?: string;

      /** 年度 <-【工商负面统计】 */
      year?: string;
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
      page?: defs.adminApi.ScPage;
    }

    export class ScPageResponse<T0 = any> {
      /** code */
      code?: string;

      /** data */
      data?: defs.adminApi.ScPageData<defs.adminApi.AdminAdvicePageResponse>;

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

    export class SeriousDishonestyInfoVo {
      /** 列入名录原因 <-【严重失信违法】 */
      listedCause?: string;

      /** 列入日期 */
      listedDate?: string;

      /** 移除名录原因 */
      removeCause?: string;

      /** 移除日期 */
      removeDate?: string;
    }

    export class ShareholderInfoVo {
      /** 投资比例 */
      capitalRatio?: string;

      /** 认缴出资币种 */
      currency?: string;

      /** 投资金额币种 */
      regCapCur?: string;

      /** 股东 */
      shareholderName?: string;

      /** 投资金额 */
      subConAm?: string;
    }

    export class TaxBannerInfoVo {
      /** 当前欠税 */
      dqqs?: string;

      /** 评价年度 */
      ratingYear?: string;

      /** 纳税人信用级别 */
      taxCreditRating?: string;

      /** 纳税人状态 */
      taxpayerStatus?: string;

      /** 纳税人类型 <-【税务banner信息】 */
      taxpayerType?: string;
    }

    export class TaxInfoAVo {
      /** 企业所得税应纳税额 */
      corpIncomeTaxAmt?: string;

      /** 企业所得税实缴金额 */
      corpIncomeTaxPaidAmt?: string;

      /** 滞纳金 */
      overdueFineAmt?: string;

      /** 逾期月份数 */
      overdueMonths?: string;

      /** 实缴金额 */
      paidAmt?: string;

      /** 应纳税额 */
      taxPayableAmt?: string;

      /** 纳税类型 <-【发票信息A】3m/6m/12m/24m */
      type?: string;

      /** 增值税应纳税额 */
      valueAddedTaxAmt?: string;

      /** 增值税实缴金额 */
      valueAddedTaxPaidAmt?: string;

      /** 增值税应纳税额环比 */
      ynseHb?: string;

      /** 增值税应纳税额同比 */
      ynseTb?: string;

      /** 0申报月份数 */
      zeroTaxDeclarationMonths?: string;
    }

    export class TaxInfoBVo {
      /** 企业所得税年度实缴金额 */
      corpIncomeTaxPaidAmt?: string;

      /** 违法违章（次） */
      illegalCnt?: string;

      /** 年度实缴金额 */
      paidAmt?: string;

      /** 年度实缴金额同比增速 */
      paidAmtYoYGrowth?: string;

      /** 增值税年度实缴金额 */
      valueAddedTaxPaidAmt?: string;

      /** 年度 <-【发票信息B】2019/2018 */
      year?: string;
    }

    export class UserBaseRequest {
      /** 密码(MD5) */
      password?: string;

      /** 手机号 */
      phone?: string;
    }

    export class UserInfoRequest {
      /** 所在市 */
      city?: string;

      /** 是否有进件权限 */
      income?: boolean;

      /** 是否内部人员 */
      insiders?: boolean;

      /** 所属机构 */
      orgName?: string;

      /** 所在省 */
      province?: string;
    }

    export class UserInfoResponse {
      /** 是否展示银行版 */
      bankVersion?: boolean;

      /** 城市 */
      city?: string;

      /** id */
      id?: number;

      /** 是否有进件权限 */
      income?: boolean;

      /** 是否内部人员 */
      insiders?: boolean;

      /** 姓名 */
      name?: string;

      /** 所属机构 */
      orgName?: string;

      /** 手机号 */
      phone?: string;

      /** 省 */
      province?: string;

      /** 账户余额 */
      remainPoints?: number;

      /** 用户类型 */
      type?: string;
    }

    export class UserPageInfoResponse {
      /** 所在市 */
      city?: string;

      /** 消费点数 */
      consumerPoints?: number;

      /** id */
      id?: number;

      /** 是否有进件权限 */
      income?: boolean;

      /** 是否内部人员 */
      insiders?: boolean;

      /** 姓名 */
      name?: string;

      /** 所属机构 */
      orgName?: string;

      /** 手机号 */
      phone?: string;

      /** 所在省 */
      province?: string;

      /** 最近登录时间 */
      recentLoginTs?: string;

      /** 注册时间 */
      regTime?: string;

      /** 剩余点数 */
      remainPoints?: number;

      /** 用户来源 */
      source?: 'YRT' | 'YD';

      /** 状态 */
      status?: 'ENABLE' | 'DISABLE';

      /** 用户类型 */
      type?: string;
    }

    export class UserPermissionRequest {
      /** 数据权限Id */
      dataIds?: Array<number>;

      /** 资源权限Id */
      resourceIds?: Array<number>;
    }

    export class UserPermissionResponse {
      /** 数据权限Id */
      dataIds?: Array<number>;

      /** 资源权限Id */
      resourceIds?: Array<number>;
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

      /** 产品状态 */
      status?: 'UPPER_SHELF' | 'OFF_SHELF';

      /** 模型指标 */
      targetModel?: Array<defs.adminApi.CommonTargetLibraryResponse>;

      /** 产品类别 */
      type?: string;
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
      targets?: Array<defs.adminApi.UserTargetInfo>;
    }

    export class YssrVo {
      /** 近12个月 */
      m12?: string;

      /** 近4个月 */
      m24?: string;

      /** 近3个月 */
      m3?: string;

      /** 近6个月 */
      m6?: string;

      /** 指标 */
      zb?: string;
    }

    export class ZbMonthInfo {
      /** 近1个月 */
      m1?: string;

      /** 近12个月 */
      m12?: string;

      /** 近3个月 */
      m3?: string;

      /** 近6个月 */
      m6?: string;

      /** 指标 */
      zb?: string;
    }

    export class ZhEvaluationVo {
      /** 描述 */
      description?: string;

      /** 维度 */
      module?: string;

      /** 分值 */
      score?: string;
    }
  }
}

declare namespace API {
  export namespace adminApi {
    /**
     * 后台-后台账号管理
     */
    export namespace admin {
      /**
       * 新增
       * /api/ctsSaaS/admin/add
       */
      export namespace add {
        export class Params {}

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.AdminAddRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 获取用户信息
       * /api/ctsSaaS/admin/getUserInfo
       */
      export namespace getUserInfo {
        export class Params {}

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.AdminInfoResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<defs.adminApi.AdminInfoResponse>>;
      }

      /**
       * 登录-密码登录
       * /api/ctsSaaS/admin/loginByPwd
       */
      export namespace loginByPwd {
        export class Params {}

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.AdminInfoResponse>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.UserBaseRequest,
        ): Promise<defs.adminApi.ScResponse<defs.adminApi.AdminInfoResponse>>;
      }

      /**
       * 退出登录
       * /api/ctsSaaS/admin/logout
       */
      export namespace logout {
        export class Params {}

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 后台用户列表
       * /api/ctsSaaS/admin/page
       */
      export namespace getPage {
        export class Params {
          /** 姓名 */
          name?: string;
          /** orgId */
          orgId?: number;
          /** 手机号 */
          phone?: string;
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.AdminPageResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.AdminPageResponse>
        >;
      }

      /**
       * 重置密码
       * /api/ctsSaaS/admin/reset/password/{id}
       */
      export namespace resetPassword {
        export class Params {
          /** id */
          id: number;
          /** password */
          password: string;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 详情
       * /api/ctsSaaS/admin/{id}
       */
      export namespace detail {
        export class Params {
          /** id */
          id: number;
        }

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.AdminDetailResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<defs.adminApi.AdminDetailResponse>>;
      }

      /**
       * 后台账号编辑
       * /api/ctsSaaS/admin/{id}
       */
      export namespace adminUpdate {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.AdminUpdateRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 禁用
       * /api/ctsSaaS/admin/{id}/disable
       */
      export namespace disable {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 启用
       * /api/ctsSaaS/admin/{id}/enable
       */
      export namespace enable {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }
    }

    /**
     * 后台-贵州企业数据管理
     */
    export namespace adminCompanyCollect {
      /**
       * 企业导出
       * /api/ctsSaaS/admin/companyCollect/export
       */
      export namespace exporting {
        export class Params {
          /** 所在区 */
          area?: string;
          /** 所在市 */
          city?: string;
          /** 企业名称 */
          companyName?: string;
          /** 联系人手机号 */
          contactPhone?: string;
          /** 创建时间-结束时间 */
          createEndTime?: string;
          /** 创建时间-开始时间 */
          createStartTime?: string;
          /** 统一社会信用代码 */
          creditCode?: string;
          /** 企业所属行业 */
          industry?: string;
          /** 所在省 */
          province?: string;
          /** 状态 */
          status?:
            | 'PENDING_AUTHORIZATION'
            | 'CREATING'
            | 'CREATED'
            | 'CANCELED';
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 企业采集列表
       * /api/ctsSaaS/admin/companyCollect/page
       */
      export namespace getPage {
        export class Params {
          /** 所在区 */
          area?: string;
          /** 所在市 */
          city?: string;
          /** 企业名称 */
          companyName?: string;
          /** 联系人手机号 */
          contactPhone?: string;
          /** 创建时间-结束时间 */
          createEndTime?: string;
          /** 创建时间-开始时间 */
          createStartTime?: string;
          /** 统一社会信用代码 */
          creditCode?: string;
          /** 企业所属行业 */
          industry?: string;
          /** 所在省 */
          province?: string;
          /** 状态 */
          status?:
            | 'PENDING_AUTHORIZATION'
            | 'CREATING'
            | 'CREATED'
            | 'CANCELED';
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.CompanyCollectPageResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.CompanyCollectPageResponse>
        >;
      }

      /**
       * 获取企业报告数据
       * /api/ctsSaaS/admin/companyCollect/report/{companyCollectId}
       */
      export namespace corpReport {
        export class Params {
          /** companyCollectId */
          companyCollectId: number;
        }

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.CreditAdviceCompanyReportResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScResponse<defs.adminApi.CreditAdviceCompanyReportResponse>
        >;
      }

      /**
       * 保存企业报告pdf URL
       * /api/ctsSaaS/admin/companyCollect/report/{companyCollectId}/pdf
       */
      export namespace corpReportPdf {
        export class Params {
          /** companyCollectId */
          companyCollectId: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.PdfUrlRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 提交详情
       * /api/ctsSaaS/admin/companyCollect/{id}
       */
      export namespace detail {
        export class Params {
          /** id */
          id: number;
        }

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.CompanyCollectDetailResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScResponse<defs.adminApi.CompanyCollectDetailResponse>
        >;
      }
    }

    /**
     * 后台-报告管理
     */
    export namespace adminCreditAdvice {
      /**
       * 导出
       * /api/ctsSaaS/admin/advice/export
       */
      export namespace exporting {
        export class Params {
          /** 报告状态 */
          creditAdviceStatus?:
            | 'PENDING_AUTHORIZATION'
            | 'PENDING_TICKETS'
            | 'CREATED'
            | 'CREATING'
            | 'CANCELED';
          /** 统一社会信用代码 */
          creditCode?: string;
          /** 结束时间 */
          endTime?: string;
          /** 企业名称 */
          enterpriseName?: string;
          /** 用户手机号 */
          phone?: string;
          /** 开始时间 */
          startTime?: string;
          /** 所属用户 */
          username?: string;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 信贷建议列表
       * /api/ctsSaaS/admin/advice/page
       */
      export namespace page {
        export class Params {
          /** 报告状态 */
          creditAdviceStatus?:
            | 'PENDING_AUTHORIZATION'
            | 'PENDING_TICKETS'
            | 'CREATED'
            | 'CREATING'
            | 'CANCELED';
          /** 统一社会信用代码 */
          creditCode?: string;
          /** 结束时间 */
          endTime?: string;
          /** 企业名称 */
          enterpriseName?: string;
          /** 用户手机号 */
          phone?: string;
          /** 开始时间 */
          startTime?: string;
          /** 所属用户 */
          username?: string;
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.AdminAdvicePageResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.AdminAdvicePageResponse>
        >;
      }

      /**
       * 生成记录
       * /api/ctsSaaS/admin/advice/{id}
       */
      export namespace generateRecord {
        export class Params {
          /** id */
          id: number;
        }

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.AdminAdviceRecordResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScResponse<defs.adminApi.AdminAdviceRecordResponse>
        >;
      }
    }

    /**
     * 后台-部门树管理
     */
    export namespace adminOrg {
      /**
       * 操作日志
       * /api/ctsSaaS/admin/org/operateLog
       */
      export namespace operateLog {
        export class Params {}

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.LogResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScPageResponse<defs.adminApi.LogResponse>>;
      }

      /**
       * 机构新增
       * /api/ctsSaaS/admin/org/save
       */
      export namespace save {
        export class Params {}

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.OrgChannelSaveRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 机构树
       * /api/ctsSaaS/admin/org/tree
       */
      export namespace tree {
        export class Params {}

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.OrgChannelListResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScResponse<defs.adminApi.OrgChannelListResponse>
        >;
      }

      /**
       * 机构编辑
       * /api/ctsSaaS/admin/org/{id}
       */
      export namespace update {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.OrgChannelSaveRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 机构删除
       * /api/ctsSaaS/admin/org/{id}
       */
      export namespace remove {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }
    }

    /**
     * 后台-银行用户申请管理
     */
    export namespace applyManage {
      /**
       * 日志详情
       * /api/ctsSaaS/admin/apply/audit/log/{id}
       */
      export namespace auditLog {
        export class Params {
          /** id */
          id: number;
        }

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.LogResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<defs.adminApi.LogResponse>>;
      }

      /**
       * 审核通过
       * /api/ctsSaaS/admin/apply/audit/pass/{id}
       */
      export namespace auditPass {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 审核驳回
       * /api/ctsSaaS/admin/apply/audit/reject/{id}
       */
      export namespace auditReject {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.ApplyAuditRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 申请列表
       * /api/ctsSaaS/admin/apply/page
       */
      export namespace getApplyPage {
        export class Params {
          /** 申请时间止 */
          applyTimeEnd?: string;
          /** 申请时间起 */
          applyTimeStart?: string;
          /** 所在市 */
          city?: string;
          /** 姓名 */
          name?: string;
          /** 手机号 */
          phone?: string;
          /** 所在省 */
          province?: string;
          /** 审核状态 */
          status?: 'PENDING' | 'APPROVED' | 'REJECTED';
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.ApplyPageResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.ApplyPageResponse>
        >;
      }
    }

    /**
     * 后台-渠道管理
     */
    export namespace channelManage {
      /**
       * 添加用户至渠道
       * /api/ctsSaaS/admin/channel/add/user
       */
      export namespace addUser {
        export class Params {}

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.AddUserToOrgChannelRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 渠道用户列表
       * /api/ctsSaaS/admin/channel/page
       */
      export namespace getPage {
        export class Params {
          /** 渠道id */
          channelId?: number;
          /** 所在市 */
          city?: string;
          /** 结束时间 */
          endTime?: string;
          /** 姓名 */
          name?: string;
          /** 手机号 */
          phone?: string;
          /** 所在省 */
          province?: string;
          /** 开始时间 */
          startTime?: string;
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.ChannelUserPageResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.ChannelUserPageResponse>
        >;
      }

      /**
       * 获取渠道功能权限树、数据权限
       * /api/ctsSaaS/admin/channel/permission/tree
       */
      export namespace getTree {
        export class Params {}

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.PermissionResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<defs.adminApi.PermissionResponse>>;
      }

      /**
       * 用户权限详情
       * /api/ctsSaaS/admin/channel/permission/{id}
       */
      export namespace permissionDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.UserPermissionResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScResponse<defs.adminApi.UserPermissionResponse>
        >;
      }

      /**
       * 用户权限配置
       * /api/ctsSaaS/admin/channel/permission/{id}
       */
      export namespace permission {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.UserPermissionRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 重置密码
       * /api/ctsSaaS/admin/channel/reset/password/{id}
       */
      export namespace resetPassword {
        export class Params {
          /** id */
          id: number;
          /** password */
          password: string;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 渠道新增
       * /api/ctsSaaS/admin/channel/save
       */
      export namespace save {
        export class Params {}

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.OrgChannelSaveRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 渠道转移
       * /api/ctsSaaS/admin/channel/transfer
       */
      export namespace channelTransfer {
        export class Params {}

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.ChannelTransferRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 渠道树
       * /api/ctsSaaS/admin/channel/tree
       */
      export namespace tree {
        export class Params {}

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.OrgChannelListResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScResponse<defs.adminApi.OrgChannelListResponse>
        >;
      }

      /**
       * 用户列表(添加用户)
       * /api/ctsSaaS/admin/channel/user/page
       */
      export namespace getUserPage {
        export class Params {
          /** 所在市 */
          city?: string;
          /** 姓名 */
          name?: string;
          /** 手机号 */
          phone?: string;
          /** 所在省 */
          province?: string;
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.ChannelUserPageResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.ChannelUserPageResponse>
        >;
      }

      /**
       * 用户移除渠道
       * /api/ctsSaaS/admin/channel/user/{id}
       */
      export namespace removeUser {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 渠道编辑
       * /api/ctsSaaS/admin/channel/{id}
       */
      export namespace update {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.OrgChannelSaveRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 渠道删除
       * /api/ctsSaaS/admin/channel/{id}
       */
      export namespace remove {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }
    }

    /**
     * 后台-产品库管理
     */
    export namespace product {
      /**
       * 新增
       * /api/ctsSaaS/admin/product/add
       */
      export namespace add {
        export class Params {}

        export type Response = defs.adminApi.ScResponse<number>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.ProductAddRequest,
        ): Promise<defs.adminApi.ScResponse<number>>;
      }

      /**
       * 产品列表
       * /api/ctsSaaS/admin/product/page
       */
      export namespace getPage {
        export class Params {
          /** 结束时间 */
          endTime?: string;
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
          /** 开始时间 */
          startTime?: string;
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.ProductPageResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.ProductPageResponse>
        >;
      }

      /**
       * 编辑
       * /api/ctsSaaS/admin/product/{id}
       */
      export namespace update {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.ProductAddRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 下架
       * /api/ctsSaaS/admin/product/{id}/down
       */
      export namespace down {
        export class Params {
          /** ID */
          id: string;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 模型指标修改
       * /api/ctsSaaS/admin/product/{id}/target
       */
      export namespace target {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.UserTargetRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 上架
       * /api/ctsSaaS/admin/product/{id}/up
       */
      export namespace up {
        export class Params {
          /** ID */
          id: string;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 详情
       * /api/ctsSaaS/admin/product/{productId}
       */
      export namespace detail {
        export class Params {
          /** productId */
          productId: number;
        }

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.CommonProductDetailResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScResponse<defs.adminApi.CommonProductDetailResponse>
        >;
      }
    }

    /**
     * 后台-充值记录
     */
    export namespace recordManager {
      /**
       * 导出
       * /api/ctsSaaS/admin/record/export
       */
      export namespace exporting {
        export class Params {
          /** 用户手机号 */
          phone?: string;
          /** 所属用户 */
          username?: string;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 充值记录列表
       * /api/ctsSaaS/admin/record/page
       */
      export namespace payPage {
        export class Params {
          /** 用户手机号 */
          phone?: string;
          /** 所属用户 */
          username?: string;
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.AdminRechargeRecordResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.AdminRechargeRecordResponse>
        >;
      }
    }

    /**
     * 后台-角色管理
     */
    export namespace role {
      /**
       * 新增
       * /api/ctsSaaS/admin/role
       */
      export namespace add {
        export class Params {}

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.RoleRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 角色列表
       * /api/ctsSaaS/admin/role/list
       */
      export namespace getList {
        export class Params {}

        export type Response = defs.adminApi.ScResponse<
          defs.adminApi.ScListData<defs.adminApi.RoleInfoResponse>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScResponse<
            defs.adminApi.ScListData<defs.adminApi.RoleInfoResponse>
          >
        >;
      }

      /**
       * 角色分页列表
       * /api/ctsSaaS/admin/role/page
       */
      export namespace getPage {
        export class Params {
          /** roleName */
          roleName?: string;
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.RolePageResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.RolePageResponse>
        >;
      }

      /**
       * 获取权限树
       * /api/ctsSaaS/admin/role/tree
       */
      export namespace getTree {
        export class Params {}

        export type Response = defs.adminApi.ScResponse<
          defs.adminApi.ScListData<defs.adminApi.AdminResourceTreeResponse>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScResponse<
            defs.adminApi.ScListData<defs.adminApi.AdminResourceTreeResponse>
          >
        >;
      }

      /**
       * 禁用
       * /api/ctsSaaS/admin/role/{id}/disable
       */
      export namespace disable {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 启用
       * /api/ctsSaaS/admin/role/{id}/enable
       */
      export namespace enable {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 详情
       * /api/ctsSaaS/admin/role/{roleId}
       */
      export namespace detail {
        export class Params {
          /** roleId */
          roleId: number;
        }

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.RoleDetailResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<defs.adminApi.RoleDetailResponse>>;
      }

      /**
       * 编辑
       * /api/ctsSaaS/admin/role/{roleId}
       */
      export namespace update {
        export class Params {
          /** roleId */
          roleId: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.RoleRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }
    }

    /**
     * 后台-前台用户管理
     */
    export namespace userManage {
      /**
       * 导出
       * /api/ctsSaaS/admin/user/export
       */
      export namespace exporting {
        export class Params {
          /** 所在市 */
          city?: number;
          /** 是否内部人员 */
          insiders?: boolean;
          /** 姓名 */
          name?: string;
          /** 手机号 */
          phone?: string;
          /** 所在省 */
          province?: number;
          /** 注册时间止 */
          regTimeEnd?: string;
          /** 注册时间起 */
          regTimeStart?: string;
          /** 状态 */
          status?: 'ENABLE' | 'DISABLE';
          /** 用户类型 */
          type?: 'BANK_CUSTOMER' | 'ENTERPRISE_SERVICE';
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 用户基本信息
       * /api/ctsSaaS/admin/user/info/{userId}
       */
      export namespace getUserInfo {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.UserInfoResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<defs.adminApi.UserInfoResponse>>;
      }

      /**
       * 用户列表
       * /api/ctsSaaS/admin/user/page
       */
      export namespace getUserPage {
        export class Params {
          /** 所在市 */
          city?: number;
          /** 是否内部人员 */
          insiders?: boolean;
          /** 姓名 */
          name?: string;
          /** 手机号 */
          phone?: string;
          /** 所在省 */
          province?: number;
          /** 注册时间止 */
          regTimeEnd?: string;
          /** 注册时间起 */
          regTimeStart?: string;
          /** 状态 */
          status?: 'ENABLE' | 'DISABLE';
          /** 用户类型 */
          type?: 'BANK_CUSTOMER' | 'ENTERPRISE_SERVICE';
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.UserPageInfoResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.UserPageInfoResponse>
        >;
      }

      /**
       * 编辑
       * /api/ctsSaaS/admin/user/{userId}
       */
      export namespace update {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.UserInfoRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 禁用
       * /api/ctsSaaS/admin/user/{userId}/disable
       */
      export namespace disableStatus {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 启用
       * /api/ctsSaaS/admin/user/{userId}/enable
       */
      export namespace enableStatus {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 充值
       * /api/ctsSaaS/admin/user/{userId}/recharge/{points}
       */
      export namespace recharge {
        export class Params {
          /** points */
          points: number;
          /** userId */
          userId: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 充值记录列表
       * /api/ctsSaaS/admin/user/{userId}/rechargeRecord/page
       */
      export namespace payPage {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.RechargeRecordResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.RechargeRecordResponse>
        >;
      }
    }

    /**
     * 后台-用户产品管理
     */
    export namespace userProductManage {
      /**
       * 产品库
       * /api/ctsSaaS/admin/user/product/page
       */
      export namespace getUserProductPage {
        export class Params {
          /** 结束时间 */
          endTime?: string;
          /** 产品名称 */
          name?: string;
          /** 用户手机号 */
          phone?: string;
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
          /** 开始时间 */
          startTime?: string;
          /** 所属用户 */
          username?: string;
        }

        export type Response =
          defs.adminApi.ScPageResponse<defs.adminApi.AdminUserProductPageResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScPageResponse<defs.adminApi.AdminUserProductPageResponse>
        >;
      }

      /**
       * 详情
       * /api/ctsSaaS/admin/user/product/{id}
       */
      export namespace detail {
        export class Params {
          /** ID */
          id: string;
        }

        export type Response =
          defs.adminApi.ScResponse<defs.adminApi.UserProductDetailResponse>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<
          defs.adminApi.ScResponse<defs.adminApi.UserProductDetailResponse>
        >;
      }

      /**
       * 修改
       * /api/ctsSaaS/admin/user/product/{id}
       */
      export namespace update {
        export class Params {
          /** ID */
          id: string;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.UserProductRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }

      /**
       * 模型指标修改
       * /api/ctsSaaS/admin/user/product/{id}/target
       */
      export namespace target {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.adminApi.ScResponse<void>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.adminApi.UserTargetRequest,
        ): Promise<defs.adminApi.ScResponse<void>>;
      }
    }
  }
}
