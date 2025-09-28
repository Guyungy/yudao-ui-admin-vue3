import request from '@/config/axios'
import type { Dayjs } from 'dayjs';

/** 用户信息信息 */
export interface UserInfo {
          id: number; // 编号
          nickname?: string; // 昵称
          examLevel: string; // 已考级别
          manager: string; // 管理
          gender: string; // 性别
          phone: string; // 手机号码
          wechat: string; // 微信
          name: string; // 姓名
          idNumber: string; // 证件号码
          bankAccount: string; // 银行账号
          bankBranch: string; // 银行开户行信息（具体到支行）
          remark: string; // 备注
          paidAmount: number; // 已缴纳金额
          cheatCheck: number; // 开挂查询
          depositRefund: number; // 保证金退还
          entryTime: string | Dayjs; // 入驻时间
          completed10Orders: number; // 是否完成10单（自动）
          orderFeedback: string; // 订单评价
          source: string; // 来源
          idNumberFormatError: number; // 身份证号码格式错误
          age: number; // 年龄
          genderCalculated: string; // 性别计算
          nativePlace: string; // 籍贯
          kookId: string; // KOOK ID
          orderDetail: string; // 订单详细
          douyinRoom: string; // 抖音直播间
          huyaRoom: string; // 虎牙直播间
          orderDetailCopy: string; // 订单详细-订单管理(副本)
  }

// 用户信息 API
export const UserInfoApi = {
  // 查询用户信息分页
  getUserInfoPage: async (params: any) => {
    return await request.get({ url: `/mall/user-info/page`, params })
  },

  // 查询用户信息详情
  getUserInfo: async (id: number) => {
    return await request.get({ url: `/mall/user-info/get?id=` + id })
  },

  // 新增用户信息
  createUserInfo: async (data: UserInfo) => {
    return await request.post({ url: `/mall/user-info/create`, data })
  },

  // 修改用户信息
  updateUserInfo: async (data: UserInfo) => {
    return await request.put({ url: `/mall/user-info/update`, data })
  },

  // 删除用户信息
  deleteUserInfo: async (id: number) => {
    return await request.delete({ url: `/mall/user-info/delete?id=` + id })
  },

  /** 批量删除用户信息 */
  deleteUserInfoList: async (ids: number[]) => {
    return await request.delete({ url: `/mall/user-info/delete-list?ids=${ids.join(',')}` })
  },

  // 导出用户信息 Excel
  exportUserInfo: async (params) => {
    return await request.download({ url: `/mall/user-info/export-excel`, params })
  },
}