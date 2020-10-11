<template>
  <div class="main">
    <div>
      <div class="img">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item >
            <img src="@/assets/imgs/img1.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/imgs/img2.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/imgs/img3.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/imgs/img4.png" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- <img src="../../assets/imgs/img1.png" alt="" /> -->
      <div class="text">
        <span>￥3299</span>
        <p>海尔(Haier)452升风冷无霜对开门冰箱</p>
      </div>
      <div class="more"></div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="onClickButton"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      // images: [
      //   "@/assets/imgs/img1.png",
      //   "@/assets/imgs/img2.png",
      //   "@/assets/imgs/img3.png",
      //   "@/assets/imgs/img4.png"
      // ]
    };
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    }
  }
};
</script>

<style scoped>
.main {
  padding: 0 5px;
  background-color: red;
}

.main img {
  width: 365px;
  height: 374px;
}

.text {
  box-sizing: border-box;
  /* padding: 0 !important; */
  width: 100%;
  height: 104px;
  left: 1px;
  color: rgba(80, 80, 80, 1);
  background-color: rgba(255, 255, 255, 1);
  font-size: 14px;
  line-height: 150%;
}

.text span {
  width: 48px;
  height: 21px;
  color: rgba(255, 87, 51, 1);
  font-size: 14px;
  line-height: 150%;
  text-align: left !important;
  font-weight: bold;
  margin: 17px 0 0 11px;
}

.text p {
  width: 264px;
  height: 21px;
  color: rgba(80, 80, 80, 1);
  font-size: 14px;
  line-height: 150%;
  text-align: left;
  font-weight: bold;
  margin: 10px 0 0 11px;
}

.more {
  width: 365px;
  height: 170px;
  margin-top: 9px;
  color: rgba(80, 80, 80, 1);
  background-color: rgba(255, 255, 255, 1);
  font-size: 14px;
  line-height: 150%;
  text-align: center;
}

.van-goods-action {
  width: 100%;
  height: 52px;
  bottom: 48px;
}

.van-goods-action .van-goods-action-icon {
  font-size: 16px !important;
}

.van-goods-action .van-goods-action-icon__icon {
  width: 23px !important;
}
</style>
