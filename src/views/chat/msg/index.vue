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
            <el-input v-model="input3" placeholder="请输入联系人">

              <el-button slot="append" icon="el-icon-search" />
            </el-input>
          </div>
          <div>
            <p style="margin-bottom: -7%">
              <el-button style="width:100%">
                <span style="float: left">
                  <el-avatar :size="35" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                </span>
                <span style="float: left;margin-top: 10px;margin-left: 10px"> 默1认按钮1</span>
                <el-tag style="margin-top: 7px" size="mini">总群</el-tag>
              </el-button>
            </p>

            <p style="margin-bottom: -7%">
              <el-button style="width:100%">
                <span style="float: left">
                  <el-avatar :size="35" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                </span>
                <span style="float: left;margin-top: 10px;margin-left: 10px"> 默1认按钮1</span>
              </el-button>
            </p>

            <p style="margin-bottom: -7%">
              <el-button style="width:100%">
                <span style="float: left">
                  <el-avatar :size="35" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                </span>
                <span style="float: left;margin-top: 10px;margin-left: 10px"> 默1认按钮1</span>
              </el-button>
            </p>
          </div>
        </el-aside>
        <el-container>
          <el-main style="background-color: azure;">

            <el-row :gutter="17">
              <el-col :span="24">
                <el-card style="height: 600px">
                  <div style="height: 60px">
                    <el-avatar style="float: left" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <a style="float: left;margin-top: 15px;margin-left: 20px; border-radius: 5px;border: 1px solid #DCDCDC;background-color: #DCDCDC">
                      第三方就好了
                    </a>
                  </div>

                  <div style="height: 60px">
                    <el-avatar style="float: right" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <a style="float: right;margin-top: 15px;margin-right: 20px; border-radius: 5px;border: 1px solid #B0C4DE;background-color: #B0C4DE">
                      第三方就好水电费sfsd了
                    </a>
                  </div>

                  <div style="height: 60px">
                    <el-avatar style="float: left" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <a style="float: left;margin-top: 15px;margin-left: 20px; border-radius: 5px;border: 1px solid #DCDCDC;background-color: #DCDCDC">
                      第三方就好水电费sfsd了
                    </a>
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

import WebSocketClass from '../../../utils/webSocketClass.js'

export default {
  name: 'Index',
  data() {
    return {
      content: ''
    }
  },
  created() {
    console.log('ddd')
    this.WsConnect()
  },
  methods: {
    WsConnect() {
      const ws = new WebSocketClass()
      ws.connect()
      ws.getMessage()
    }
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
