<template>
  <div class="home">
    <ul>
      <li><a href="#">全部（125）</a></li>
      <li><a href="#">追加评价（95）</a></li>
      <li><a href="#">有图评价（59）</a></li>
    </ul>
    <van-skeleton title avatar :row="3" :loading="loading">
      <table>
        <tr>
          <td>头像</td>
          <td>
            <div>用户名</div>
            <div>评论</div>
            <div>日期时间</div>
          </td>
        </tr>
      </table>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.loading = false;
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  margin-top: 48px;
  overflow: hidden;
}

.home ul {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.home ul li {
  padding: 5px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  background-color: rgba(170, 11, 64, 0.8);
  border-radius: 15px;
}
.home ul li a {
  text-align: center;
  color: #fff;
}

table {
  width: 100%;
  padding: 0 20px;
}

table tr td:nth-child(1) {
  width: 50px;
}

table tr td:nth-child(2) {
  padding: 5px;
}
</style>