<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
      <!-- # -->
      <el-menu-item index="/home" router="/home" ><i class="el-icon-menu"></i>首页</el-menu-item>
      <!-- # -->
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!-- # -->
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "dl-menu"
  }
</script>
