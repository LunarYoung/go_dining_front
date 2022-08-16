<template>

  <div class="index">
    <el-container direction="vertical">
      <!--      <el-header style="background-color: aquamarine">-->
      <!--        <div>-->
      <!--          <div style="display:inline-block;width: 14%;height: 100%">-->
      <!--            <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">-->

      <!--              <el-button slot="append" icon="el-icon-search" />-->
      <!--            </el-input>-->
      <!--          </div>-->
      <!--          <div style="display:inline-block;margin-left: 20px"> skfjl</div>-->
      <!--        </div>-->

      <!--      </el-header>-->
      <el-container>
        <el-aside style="height:100%;width: 15%;margin-bottom: -5%">
          <div>
            <el-input  placeholder="请输入联系人">

              <el-button slot="append" icon="el-icon-search" />
            </el-input>
          </div>
          <div v-for="(item, index) in msgDate">

            <p v-if="item.send_from !== org_id" style="margin-bottom: -7%">
              <el-button style="width:100%">
                <span style="float: left">
                  <el-avatar :size="35" :src=item.avt />
                </span>
                <span  style="float: left;margin-top: 10px;margin-left: 10px">
                  {{item.name}}
                </span>
                <el-tag style="margin-top: 7px" size="mini">总群</el-tag>
              </el-button>
            </p>

          </div>
        </el-aside>
        <el-container>
          <el-main style="background-color: azure;">

            <el-row :gutter="17">
              <el-col :span="24">
                <el-card style="height: 600px">

              <div  v-for="(item, index) in msgDate">

                  <div v-if="item.send_from === org_id" style="height: 60px">
                    <el-avatar style="float: right" :src=item.avt />
                    <a style="float: right;margin-top: 15px;margin-right: 20px; border-radius: 5px;border: 1px solid #B0C4DE;background-color: #B0C4DE">
                     {{item.msg}}
                    </a>
                  </div>
                  <div v-else style="height: 60px">
                    <el-avatar style="float: left" :src=item.avt />
                    <a style="float: left;margin-top: 15px;margin-left: 20px; border-radius: 5px;border: 1px solid #DCDCDC;background-color: #DCDCDC">
                      {{item.msg}}
                    </a>
                  </div>

              </div>
                </el-card>
              </el-col>
            </el-row>
            <div style="background-color: darkgray;height: 20%">

              <el-input
                v-model="content"
                type="textarea"
                :rows="7"
                placeholder="enter提交"
              >
                <el-button slot="suffix" style="padding-right:10px" type="text">选择</el-button>
              </el-input>

            </div>
          </el-main>

        </el-container>
      </el-container>
    </el-container>
  </div>

</template>

<script>

import { sendData, closewebsocket, initWebSocket }  from '../../../utils/ws.js'


export default {
  name: 'Index',
  data() {
    return {
      content: '',
      org_id:'1234',
      msgDate:[
        {
          name:"zeng",
          avt:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          send_from:"1",
          send_to:"1234",
          msg:"sfjksds1111111111111111dhf"
        },
        {
          name:"gao",
          avt:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          send_from:"1234",
          send_to:"1",
          msg:"sfjksdsdfsfhf"
        },
        {
          name:"gao",
          avt:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          send_from:"1",
          send_to:"1234",
          msg:"sfjks对方是否dhf"
        },
      ]
    }
  },
  created() {
    initWebSocket();
    this.send();
  },
  methods: {
    test(e) {
      console.log(e.data);
      this.data = JSON.parse(e.data);
    },
    // 发送数据
    send() {
      sendData("request jammer", this.test);

    },

  }

}
</script>

<style scoped lang="scss">

.index{
  height: calc(100vh);
}
html, body, #app, .el-container {

  /*统一设置高度为100%*/
  height: 100%;
}
</style>
