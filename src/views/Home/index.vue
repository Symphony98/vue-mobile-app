<template>
  <div id="app">
    <div class="head">
      首页
    </div>
    <div class="contents">
      <div class="lbt">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="category">
        <van-grid :column-num="4">
          <van-grid-item
            v-for="item in category"
            :key="item.id"
            :icon="item.icon"
            :text="item.name"
          />
        </van-grid>
      </div>

      <!-- 商品内容 -->
      <div class="main" ref="wrapper">
        <!-- 内容区域 -->
        <div class="content">
          <van-card
            v-for="item in product"
            :key="item.id"
            :num="item.num"
            :price="item.price"
            :desc="item.describe"
            :title="item.name"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #tags>
              <van-tag
                plain
                type="danger"
                v-for="(i, index) in item.title"
                :key="index"
                >{{ i }}</van-tag
              >
            </template>
            <template #footer>
              <van-button size="mini" @click="SeeDetail(item)"
                >查看详情</van-button
              >
              <van-button size="mini">加入购物车</van-button>
            </template>
          </van-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BScroll from "better-scroll";
let count = 0;
let timer;
export default {
  data() {
    return {
      images: [
        require("../../assets/imgs/13.jpg"),
        require("../../assets/imgs/14.jpg"),
        require("../../assets/imgs/15.jpg")
      ],
      category: [
        {
          id: 1,
          name: "上衣",
          icon: "fire-o"
        },
        {
          id: 2,
          name: "裤子",
          icon: "coupon-o"
        },
        {
          id: 3,
          name: "鞋子",
          icon: "gem-o"
        },
        {
          id: 4,
          name: "套装",
          icon: "add-o"
        },
        {
          id: 5,
          name: "手机",
          icon: "warning-o"
        },
        {
          id: 6,
          name: "电脑",
          icon: "comment-circle-o"
        },
        {
          id: 7,
          name: "渔具",
          icon: "chat-o"
        },
        {
          id: 8,
          name: "其他",
          icon: "vip-card-o"
        }
      ],
      product: []
    };
  },
  methods: {
    ...mapMutations(["SETPRO"]),
    SeeDetail(item) {
      let item1 = JSON.stringify(item);
      console.log(item1);
      localStorage.setItem("product", item1);
      this.$store.commit("SETPRO", item);
      this.$router.push({ path: "/detail" });
    },
    getProduct() {
      let requestPro = new Promise((res, rej) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          let pro = [
            {
              id: 1,
              name: "平板电脑",
              describe: "苹果旗下的平板电脑产品",
              price: "2999.00",
              num: "10",
              title: ["平板", "小型电脑"]
            },
            {
              id: 2,
              name: "华为mate40",
              describe: "华为旗舰级",
              price: "4999.00",
              num: "10",
              title: ["手机", "高端品牌"]
            },
            {
              id: 3,
              name: "机械键盘",
              describe: "一款可以提升您的游戏体验的键盘",
              price: "299.00",
              num: "50",
              title: ["键盘", "实用产品"]
            }
          ];
          res(pro);
        }, 800);
      });

      requestPro
        .then(res => {
          this.product = [...this.product, ...res];
          this.$nextTick(() => {
            count++;
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.wrapper, {});
              this.scroll.on("touchEnd", pos => {
                // console.log(pos);
                // 上拉刷新动作
                if (pos.y > -400 * count) {
                  this.getProduct();
                  console.log("正在加载数据...");
                }
              });
            } else {
              this.scroll.refresh();
            }
          });
        })
        .catch(err => err);
    }
  },
  mounted() {
    this.getProduct();
  }
};
</script>

<style scoped>
#app {
  overflow: hidden;
  width: 100%;
  position: relative;
}
.head {
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  text-align: center;
  width: 100%;
  position: fixed;
}

.contents {
  margin-top: 48px;
}
.contents .lbt {
  height: 150px;
  background-color: red;
}
.contents .lbt .van-swipe {
  width: 100%;
  height: 100%;
}
.contents .lbt .van-swipe .van-swipe-item img {
  width: 100%;
  height: 150px;
}

.contents .category {
  /* height: 100px; */
  background-color: cadetblue;
}

.contents .main {
  height: 250px;
  overflow: hidden;
  background-color: cornflowerblue;
}
</style>