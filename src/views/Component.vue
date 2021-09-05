<template>
  <div class="component-wrapper">
    <h1>组件</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <!-- dialog 弹框 -->
      <el-button type="primary" @click="statusList['dialogStatus'] = true"
        >主要按钮</el-button
      >
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <!--  -->
    <el-steps :space="200" :active="1" finish-status="success">
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px" @click="hit">下一步</el-button>

    <!--  -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">444444用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <!-- dialog 弹框 -->
    <el-drawer
      title="我是标题"
      :visible.sync="statusList['dialogStatus']"
      direction="rtl"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusList: {
        dialogStatus: false,
      },
      active: 1,
      activeName: "second",
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    //
    hit() {
      if (this.active++ > 2) this.active = 0;
    },
    //
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  created() {},
};
</script>