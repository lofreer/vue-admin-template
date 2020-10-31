<template>
  <div class="layout-wrap">
    <div class="layout-sidebar">
      <Sidebar />
    </div>
    <div class="layout-header">
        <Header />
      </div>
    <div class="layout-main">
      <Main />
    </div>
  </div>
</template>

<script>
import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";

export default {
  components: {
    Header,
    Sidebar,
    Main,
  },
};
</script>

<style lang="less" scoped>
.layout-wrap {
  height: 100%;
  padding: 100px 0 0 200px;

  .layout-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    overflow: auto;
  }
  .layout-header {
    position: fixed;
    left: 200px;
    top: 0;
    right: 0;
    height: 100px;
  }
  .layout-main {
    height: 100%;
    padding: 20px;
    overflow: auto;
  }
}
</style>
