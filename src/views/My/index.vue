<template>
  <div id="app">
    <div class="head">
      <van-icon @click="pageGO" size="20" name="arrow-left" />
      我的
      <van-icon size="20" name="replay" />
    </div>
    <div class="content">
      <div class="avatar">
        <div class="img"></div>
      </div>
      <div class="list">
        <ul>
          <li>
            <a href="#">我的订单</a>
            <van-icon size="20" name="arrow" />
          </li>
          <li>
            <a href="#">购买记录</a>
            <van-icon size="20" name="arrow" />
          </li>
          <li>
            <a href="#">联系客服</a>
            <van-icon size="20" name="arrow" />
          </li>
          <li>
            <a href="#">帮助中心</a>
            <van-icon size="20" name="arrow" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pageGO() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.head {
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  position: fixed;
  display: flex;
  justify-content: space-between;
}

.head .van-icon {
  margin: 15px;
}

.content {
  margin-top: 48px;
}

.content .avatar {
  height: 100px;
  background-color: rgba(80, 15, 117, 0.8);
  overflow: hidden;
}

.content .avatar .img {
  margin: 20px auto;
  background-image: url("./../../assets/imgs/头像1.jpg");
  background-size: 50px 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.content .list {
  margin-top: 20px;
}

.content .list li {
  background-color: rgba(83, 26, 158, 0.7);
  height: 50px;
  line-height: 50px;
  margin: 10px 0;
  padding: 0 10px;
}

.content .list a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
}

.content .list .van-icon {
  margin-top: 15px;
  float: right;
}
</style>