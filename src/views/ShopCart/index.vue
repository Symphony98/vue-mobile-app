<template>
  <div>
    <div class="head">
      购物车
    </div>
    
    <van-empty description="暂无数据" />

    <div class="foot">
      <h1>解耦合：{{ id }}</h1>
    </div>
    <van-submit-bar
      label="总价："
      currency="￥"
      :price="toYuan"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 399
    };
  },
  props: ["id"],
  computed: {
    // 由于该组件的price是按分为单位的，所以需要转换一下
    toYuan() {
      return parseInt(this.price.toString() + "00" + ".00");
    }
  },
  methods: {
    onSubmit() {
      console.log(111);
    }
  }
};
</script>

<style scoped>
.van-submit-bar {
  bottom: 50px;
}

.head {
  height: 48px;
  line-height: 48px;
  width: 100%;
  font-size: 18px;
  text-align: center;
}
</style>