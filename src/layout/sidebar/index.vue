<template>
  <div class="sidebar-wrap">
    <div class="logo">
      <p>LOGO</p>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.sidebar-wrap {
  width: 200px;
  height: 100%;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background: #2c2c2c;
  }
}
</style>
