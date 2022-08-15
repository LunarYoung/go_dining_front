
<template>
  <div>
    <el-divider content-position="left">消息推送</el-divider>
    <el-form ref="ruleForm" :model="form" :rules="rules" label-width="100px" class="Form">

      <!--      <el-form-item label="图片地址一" prop="pass">-->
      <!--        <el-input v-model="form.img1" ></el-input>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item label="图片地址二" prop="checkPass">-->
      <!--        <el-input  v-model="form.img2" ></el-input>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item label="图片地址三" prop="age">-->
      <!--        <el-input v-model.number="form.img3"></el-input>-->
      <!--      </el-form-item>-->

      <el-form-item label="内容" prop="status">
        <el-input v-model="form.status" type="textarea" :rows="8" />
      </el-form-item>
      <el-form-item label="推送角色" prop="status">
        <el-select v-model="value" placeholder="请选择角色">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">推送</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { queryApplets,updateApplets} from '@/api/article'
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      form: {
        img1: '',
        img2: '',
        img3: '',
        status: ''
      },
      rules: {
        status: [
          { required: true, message: '请填写', trigger: 'blur' }
        ]
      }
    }
  },
  created() {

  },
  methods: {

  }

}
</script>

<style scoped>
.Form{
  height: 80%;
  width: 80%;
  margin-top: 2%;
  margin-left: 5%;
}

</style>
