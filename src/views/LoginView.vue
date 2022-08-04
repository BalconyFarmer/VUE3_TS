<template>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
    >

        <el-form-item label="用户名" prop="name">
            <el-input v-model.number="ruleForm.name"/>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" autocomplete="off"/>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登陆</el-button>
        </el-form-item>

        <div>{{ userStore.name }}</div>
    </el-form>
</template>

<script lang="ts" setup>
import {reactive, ref, watch} from 'vue'
import type {FormInstance} from 'element-plus'
import {useRouter, useRoute} from 'vue-router'
import {useUserStore} from '@/store/user'

const userStore = useUserStore()
// userStore.name = '李四' // 不建议
const see = ref(userStore.fullName)

setTimeout(() => {
    userStore.updateName('李四')
}, 1000)

watch(() => userStore.fullName, (cur, pre) => {
    console.log(cur, '新值', pre, '旧值')
});

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
    pass: '',
    name: '',
})

const checkAge = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('Please input the name'))
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
        } else {
            if (value < 18) {
                callback(new Error('Age must be greater than 18'))
            } else {
                callback()
            }
        }
    }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {

    }
}
const rules = reactive({
    name: [{validator: checkAge, trigger: 'blur'}],
    pass: [{validator: validatePass, trigger: 'blur'}],
})

const router = useRouter()
const route = useRoute()

const submitForm = (formEl: FormInstance | undefined) => {
    if ((ruleForm.name == "1") && (ruleForm.pass == "1")) {
        router.push({
            name: 'about',
            query: {
                ...route.query,
            }
        })
    }
}
</script>

<style scoped lang="scss">

</style>