<template>
  <div id="app">
    <div class="head">
      <span @click="toLast">返回</span>
      <span>商品详情</span>
      <van-icon size="20" name="replay" />
    </div>
    <!-- <h1>{{ product }}</h1> -->
    <ul>
      <li>
        商品名称:
        <span>{{ product.name }}</span>
      </li>
      <li>
        商品价格:
        <span>￥{{ product.price }}</span>
      </li>
      <li>
        商品标签:
        <span v-for="(item, index) in product.title" :key="index">
          {{ item }}
        </span>
      </li>
      <li>
        商品描述:
        <span>{{ product.describe }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  data() {
    return {
      product: null
    };
  },
  created() {
    // 获取数据
    this.getPro();
  },
  methods: {
    // 从localStorage中获取数据
    getPro() {
      let product = JSON.parse(localStorage.getItem("product"));
      this.product = product;
    },
    // 返回按钮
    toLast() {
      this.$router.go(-1);
      localStorage.removeItem("product");
    }
  }
};
</script>

<style scoped>
.head {
  height: 48px;
  line-height: 48px;
  display: flex;
  justify-content: space-between;
}

.head span {
  font-size: 18px;
  line-height: 48px;
}

.head span:nth-child(1) {
  font-size: 14px;
  padding: 0 10px;
}

.head .van-icon {
  margin: 10px 10px 0 0;
}

ul {
  padding: 10px;
  font-size: 14px;
  height: 500px;
  background-color: rgba(57, 125, 156, 0.5);
}

ul li {
  color: slateblue;
  height: 50px;
  line-height: 50px;
}

ul li span {
  color: brown;
}

ul li:nth-child(3) span{
  padding: 10px;
  margin: 10px;
  border: 1px solid white;
  background-color: red;
  color: white;
}

ul li:nth-child(2) span{
  font-size: 18px;
  color: red;
}
</style>