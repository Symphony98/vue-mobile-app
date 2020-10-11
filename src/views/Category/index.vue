<template>
  <div id="app">
    <div id="nav">
      <router-link to="/category/product" active-class="active"
        >商品</router-link
      >
      <router-link to="/category/details" active-class="active"
        >详情</router-link
      >
      <router-link to="/category/comment" active-class="active"
        >评论</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  position: relative;
  overflow: hidden;
}
#nav {
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: 48px;
  font-size: 24px;
  line-height: 150%;
  background-color: rgba(255, 255, 255, 0.5);
  color: rgba(80, 80, 80, 1);
}

#nav a {
  margin: 5px 20px;
  color: rgba(80, 80, 80, 1);
  line-height: 150%;
  text-align: left;
}

#nav .active {
  color: red;
}
</style>