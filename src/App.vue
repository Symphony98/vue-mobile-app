<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="wap-home">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/category/product" icon="orders-o">
        分类
      </van-tabbar-item>
      <van-tabbar-item replace to="/shopcart/123" icon="shopping-cart">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="manager">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.van-tabbar {
  z-index: 10;
}
</style>