<template>
  <div class="main">
    <div class="nav">
      <router-link to="/category/details/product_jieshao">产品介绍</router-link>
      <router-link to="/category/details/product_qa">常见问题</router-link>
      <router-link to="/category/details/product_azxz">安装须知</router-link>
      <router-link to="/category/details/product_req">检测报告</router-link>      
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
</script>
<style scoped>
.main {
  text-align: center;
  margin-top: 48px;
  background-color: blueviolet;
}

.main div {
  text-align: left;
}

.main a {
  text-align: center;
  font-size: 16px;
  margin-right: 8px;
  color: black;
}

.nav {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  line-height: 38px;
  height: 38px;
}
</style>