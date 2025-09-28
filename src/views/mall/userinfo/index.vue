<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form
      class="-mb-15px"
      :model="queryParams"
      ref="queryFormRef"
      :inline="true"
      label-width="68px"
    >
      <el-form-item label="昵称" prop="nickname">
        <el-input
          v-model="queryParams.nickname"
          placeholder="请输入昵称"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="已考级别" prop="examLevel">
        <el-input
          v-model="queryParams.examLevel"
          placeholder="请输入已考级别"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="管理" prop="manager">
        <el-input
          v-model="queryParams.manager"
          placeholder="请输入管理"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input
          v-model="queryParams.gender"
          placeholder="请输入性别"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input
          v-model="queryParams.phone"
          placeholder="请输入手机号码"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="微信" prop="wechat">
        <el-input
          v-model="queryParams.wechat"
          placeholder="请输入微信"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入姓名"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="证件号码" prop="idNumber">
        <el-input
          v-model="queryParams.idNumber"
          placeholder="请输入证件号码"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="银行账号" prop="bankAccount">
        <el-input
          v-model="queryParams.bankAccount"
          placeholder="请输入银行账号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="银行开户行信息（具体到支行）" prop="bankBranch">
        <el-input
          v-model="queryParams.bankBranch"
          placeholder="请输入银行开户行信息（具体到支行）"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input
          v-model="queryParams.remark"
          placeholder="请输入备注"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="已缴纳金额" prop="paidAmount">
        <el-input
          v-model="queryParams.paidAmount"
          placeholder="请输入已缴纳金额"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="开挂查询" prop="cheatCheck">
        <el-input
          v-model="queryParams.cheatCheck"
          placeholder="请输入开挂查询"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="保证金退还" prop="depositRefund">
        <el-input
          v-model="queryParams.depositRefund"
          placeholder="请输入保证金退还"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="入驻时间" prop="entryTime">
        <el-date-picker
          v-model="queryParams.entryTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="添加时间" prop="createTime">
        <el-date-picker
          v-model="queryParams.createTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="是否完成10单（自动）" prop="completed10Orders">
        <el-input
          v-model="queryParams.completed10Orders"
          placeholder="请输入是否完成10单（自动）"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="订单评价" prop="orderFeedback">
        <el-input
          v-model="queryParams.orderFeedback"
          placeholder="请输入订单评价"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="来源" prop="source">
        <el-input
          v-model="queryParams.source"
          placeholder="请输入来源"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="身份证号码格式错误" prop="idNumberFormatError">
        <el-input
          v-model="queryParams.idNumberFormatError"
          placeholder="请输入身份证号码格式错误"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input
          v-model="queryParams.age"
          placeholder="请输入年龄"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="性别计算" prop="genderCalculated">
        <el-input
          v-model="queryParams.genderCalculated"
          placeholder="请输入性别计算"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="籍贯" prop="nativePlace">
        <el-input
          v-model="queryParams.nativePlace"
          placeholder="请输入籍贯"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="KOOK ID" prop="kookId">
        <el-input
          v-model="queryParams.kookId"
          placeholder="请输入KOOK ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="订单详细" prop="orderDetail">
        <el-input
          v-model="queryParams.orderDetail"
          placeholder="请输入订单详细"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="抖音直播间" prop="douyinRoom">
        <el-input
          v-model="queryParams.douyinRoom"
          placeholder="请输入抖音直播间"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="虎牙直播间" prop="huyaRoom">
        <el-input
          v-model="queryParams.huyaRoom"
          placeholder="请输入虎牙直播间"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="订单详细-订单管理(副本)" prop="orderDetailCopy">
        <el-input
          v-model="queryParams.orderDetailCopy"
          placeholder="请输入订单详细-订单管理(副本)"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
        <el-button
          type="primary"
          plain
          @click="openForm('create')"
          v-hasPermi="['mall:user-info:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['mall:user-info:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
        <el-button
            type="danger"
            plain
            :disabled="isEmpty(checkedIds)"
            @click="handleDeleteBatch"
            v-hasPermi="['mall:user-info:delete']"
        >
          <Icon icon="ep:delete" class="mr-5px" /> 批量删除
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table
        row-key="id"
        v-loading="loading"
        :data="list"
        :stripe="true"
        :show-overflow-tooltip="true"
        @selection-change="handleRowCheckboxChange"
    >
    <el-table-column type="selection" width="55" />
      <el-table-column label="编号" align="center" prop="id" />
      <el-table-column label="昵称" align="center" prop="nickname" />
      <el-table-column label="已考级别" align="center" prop="examLevel" />
      <el-table-column label="管理" align="center" prop="manager" />
      <el-table-column label="性别" align="center" prop="gender" />
      <el-table-column label="手机号码" align="center" prop="phone" />
      <el-table-column label="微信" align="center" prop="wechat" />
      <el-table-column label="姓名" align="center" prop="name" />
      <el-table-column label="证件号码" align="center" prop="idNumber" />
      <el-table-column label="银行账号" align="center" prop="bankAccount" />
      <el-table-column label="银行开户行信息（具体到支行）" align="center" prop="bankBranch" />
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="已缴纳金额" align="center" prop="paidAmount" />
      <el-table-column label="开挂查询" align="center" prop="cheatCheck" />
      <el-table-column label="保证金退还" align="center" prop="depositRefund" />
      <el-table-column
        label="入驻时间"
        align="center"
        prop="entryTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column
        label="添加时间"
        align="center"
        prop="createTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="是否完成10单（自动）" align="center" prop="completed10Orders" />
      <el-table-column label="订单评价" align="center" prop="orderFeedback" />
      <el-table-column label="来源" align="center" prop="source" />
      <el-table-column label="身份证号码格式错误" align="center" prop="idNumberFormatError" />
      <el-table-column label="年龄" align="center" prop="age" />
      <el-table-column label="性别计算" align="center" prop="genderCalculated" />
      <el-table-column label="籍贯" align="center" prop="nativePlace" />
      <el-table-column label="KOOK ID" align="center" prop="kookId" />
      <el-table-column label="订单详细" align="center" prop="orderDetail" />
      <el-table-column label="抖音直播间" align="center" prop="douyinRoom" />
      <el-table-column label="虎牙直播间" align="center" prop="huyaRoom" />
      <el-table-column label="订单详细-订单管理(副本)" align="center" prop="orderDetailCopy" />
      <el-table-column label="操作" align="center" min-width="120px">
        <template #default="scope">
          <el-button
            link
            type="primary"
            @click="openForm('update', scope.row.id)"
            v-hasPermi="['mall:user-info:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['mall:user-info:delete']"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <UserInfoForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { isEmpty } from '@/utils/is'
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import { UserInfoApi, UserInfo } from '@/api/mall/userinfo'
import UserInfoForm from './UserInfoForm.vue'

/** 用户信息 列表 */
defineOptions({ name: 'UserInfo' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<UserInfo[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  nickname: undefined,
  examLevel: undefined,
  manager: undefined,
  gender: undefined,
  phone: undefined,
  wechat: undefined,
  name: undefined,
  idNumber: undefined,
  bankAccount: undefined,
  bankBranch: undefined,
  remark: undefined,
  paidAmount: undefined,
  cheatCheck: undefined,
  depositRefund: undefined,
  entryTime: [],
  createTime: [],
  completed10Orders: undefined,
  orderFeedback: undefined,
  source: undefined,
  idNumberFormatError: undefined,
  age: undefined,
  genderCalculated: undefined,
  nativePlace: undefined,
  kookId: undefined,
  orderDetail: undefined,
  douyinRoom: undefined,
  huyaRoom: undefined,
  orderDetailCopy: undefined,
})
const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await UserInfoApi.getUserInfoPage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, id)
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await UserInfoApi.deleteUserInfo(id)
    message.success(t('common.delSuccess'))
    currentRow.value = {}
    // 刷新列表
    await getList()
  } catch {}
}

/** 批量删除用户信息 */
const handleDeleteBatch = async () => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    await UserInfoApi.deleteUserInfoList(checkedIds.value);
    checkedIds.value = [];
    message.success(t('common.delSuccess'))
    await getList();
  } catch {}
}

const checkedIds = ref<number[]>([])
const handleRowCheckboxChange = (records: UserInfo[]) => {
  checkedIds.value = records.map((item) => item.id);
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await UserInfoApi.exportUserInfo(queryParams)
    download.excel(data, '用户信息.xls')
  } catch {
  } finally {
    exportLoading.value = false
  }
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>