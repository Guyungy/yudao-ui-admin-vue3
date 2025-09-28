<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="formData.nickname" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="已考级别" prop="examLevel">
        <el-input v-model="formData.examLevel" placeholder="请输入已考级别" />
      </el-form-item>
      <el-form-item label="管理" prop="manager">
        <el-input v-model="formData.manager" placeholder="请输入管理" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input v-model="formData.gender" placeholder="请输入性别" />
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="formData.phone" placeholder="请输入手机号码" />
      </el-form-item>
      <el-form-item label="微信" prop="wechat">
        <el-input v-model="formData.wechat" placeholder="请输入微信" />
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="证件号码" prop="idNumber">
        <el-input v-model="formData.idNumber" placeholder="请输入证件号码" />
      </el-form-item>
      <el-form-item label="银行账号" prop="bankAccount">
        <el-input v-model="formData.bankAccount" placeholder="请输入银行账号" />
      </el-form-item>
      <el-form-item label="银行开户行信息（具体到支行）" prop="bankBranch">
        <el-input v-model="formData.bankBranch" placeholder="请输入银行开户行信息（具体到支行）" />
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="formData.remark" placeholder="请输入备注" />
      </el-form-item>
      <el-form-item label="已缴纳金额" prop="paidAmount">
        <el-input v-model="formData.paidAmount" placeholder="请输入已缴纳金额" />
      </el-form-item>
      <el-form-item label="开挂查询" prop="cheatCheck">
        <el-input v-model="formData.cheatCheck" placeholder="请输入开挂查询" />
      </el-form-item>
      <el-form-item label="保证金退还" prop="depositRefund">
        <el-input v-model="formData.depositRefund" placeholder="请输入保证金退还" />
      </el-form-item>
      <el-form-item label="入驻时间" prop="entryTime">
        <el-date-picker
          v-model="formData.entryTime"
          type="date"
          value-format="x"
          placeholder="选择入驻时间"
        />
      </el-form-item>
      <el-form-item label="是否完成10单（自动）" prop="completed10Orders">
        <el-input v-model="formData.completed10Orders" placeholder="请输入是否完成10单（自动）" />
      </el-form-item>
      <el-form-item label="订单评价" prop="orderFeedback">
        <el-input v-model="formData.orderFeedback" placeholder="请输入订单评价" />
      </el-form-item>
      <el-form-item label="来源" prop="source">
        <el-input v-model="formData.source" placeholder="请输入来源" />
      </el-form-item>
      <el-form-item label="身份证号码格式错误" prop="idNumberFormatError">
        <el-input v-model="formData.idNumberFormatError" placeholder="请输入身份证号码格式错误" />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="formData.age" placeholder="请输入年龄" />
      </el-form-item>
      <el-form-item label="性别计算" prop="genderCalculated">
        <el-input v-model="formData.genderCalculated" placeholder="请输入性别计算" />
      </el-form-item>
      <el-form-item label="籍贯" prop="nativePlace">
        <el-input v-model="formData.nativePlace" placeholder="请输入籍贯" />
      </el-form-item>
      <el-form-item label="KOOK ID" prop="kookId">
        <el-input v-model="formData.kookId" placeholder="请输入KOOK ID" />
      </el-form-item>
      <el-form-item label="订单详细" prop="orderDetail">
        <el-input v-model="formData.orderDetail" placeholder="请输入订单详细" />
      </el-form-item>
      <el-form-item label="抖音直播间" prop="douyinRoom">
        <el-input v-model="formData.douyinRoom" placeholder="请输入抖音直播间" />
      </el-form-item>
      <el-form-item label="虎牙直播间" prop="huyaRoom">
        <el-input v-model="formData.huyaRoom" placeholder="请输入虎牙直播间" />
      </el-form-item>
      <el-form-item label="订单详细-订单管理(副本)" prop="orderDetailCopy">
        <el-input v-model="formData.orderDetailCopy" placeholder="请输入订单详细-订单管理(副本)" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { UserInfoApi, UserInfo } from '@/api/mail/userinfo'

/** 用户信息 表单 */
defineOptions({ name: 'UserInfoForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
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
  entryTime: undefined,
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
const formRules = reactive({
  nickname: [{ required: true, message: '昵称不能为空', trigger: 'blur' }],
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await UserInfoApi.getUserInfo(id)
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  await formRef.value.validate()
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as UserInfo
    if (formType.value === 'create') {
      await UserInfoApi.createUserInfo(data)
      message.success(t('common.createSuccess'))
    } else {
      await UserInfoApi.updateUserInfo(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
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
    entryTime: undefined,
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
  }
  formRef.value?.resetFields()
}
</script>