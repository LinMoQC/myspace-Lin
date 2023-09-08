<template>
<div class="login">
    <el-card class="box-card bg">
        <div class="box">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <h1 style="font-size: 30px;margin-left: 85px;">Login</h1>
                <el-form-item label="账号" prop="account">
                    <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
</div>
</template>

    
<script>
export default {
    data() {
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };

        let validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号'));
            } else {
                if (this.ruleForm.pass !== '') { // 检查密码字段
                    this.$refs.ruleForm.validateField('pass');
                }
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '',
                account: '',
            },
            rules: {
                pass: [{
                    validator: validatePass,
                    trigger: 'blur'
                }],
                account: [{
                    validator: validatePass2,
                    trigger: 'blur'
                }],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

    
<style lang="css" scoped>
.box {
    height: 450px;
    background-color: transparent;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes gradient-move {
    0% {
        background-position: 0% 0%;
    }

    100% {
        background-position: 100% 100%;
    }
}

.bg {
    background: linear-gradient(135deg, hsl(340deg, 80%, 70%), hsl(270deg, 80%, 70%), hsl(420deg, 80%, 70%), hsl(320deg, 80%, 70%));
    background-size: 200% 200%;
    animation: gradient-move 5s linear 1s infinite alternate;
    backdrop-filter: blur(100px);
}

.login{
    padding: 20px;
}
</style>
