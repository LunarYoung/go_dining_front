<template>

  <div class="index">
    <el-container direction="vertical">
      <el-header style="background-color: aquamarine">
        <div>
          <span> 联系人</span> <span> name</span>
        </div>

      </el-header>
      <el-container>
        <el-aside style="background-color: red;height:100%;width: 13vw">
          slider
        </el-aside>
        <el-container>
          <el-main style="background-color: azure">Main</el-main>

        </el-container>
      </el-container>
    </el-container>
  </div>

</template>

<script>
export default {
  name: 'Index'
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
