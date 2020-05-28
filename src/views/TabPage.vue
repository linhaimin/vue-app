<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="search">
        发现
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="contact">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'TabPage'
}
</script>

<style lang="scss">

</style>
