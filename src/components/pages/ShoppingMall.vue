<template>
  <div>
    <div class="search-bar">
      <van-row fullter>
        <van-col span="3">
          <img :src="locationIcon" width="80%" class="location-icon" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="4" offset="1">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-area">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="(item, index) in bannerPicArray"
          :key="index + Math.random()"
        >
          <!-- 图片宽高不同意，要设定统一的高度  240px-->
          <img v-lazy="item" alt="" width="100%" height="240px" srcset="" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      msg: "Shopping Mall",
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2963683156,4158525284&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3248240912,575567721&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575101115889&di=92851261a6ae0af08e67020c5a7dc8cf&imgtype=0&src=http%3A%2F%2Fimg.bqatj.com%2Fimg%2F9bc479ea0cbec87d.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575101115888&di=91b8171a0b756ec61b97cbb0873cfa39&imgtype=0&src=http%3A%2F%2Fwww.itfly.net%2Fuploads%2Fallimg%2F20170530%2F1496088287829_4.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575101115882&di=419b6836b40b557d2fdca4ed0ceb56c4&imgtype=0&src=http%3A%2F%2Ft-1.tuzhan.com%2F95bd950de4e6%2Fp-1%2Fl%2F2013%2F01%2F24%2F10%2Fd01d4f352db64768aa2f7b55900aa641.jpg"
      ]
    };
  },

  created() {
    this.$axios
      .get(
        "/48192/api/index"
      )
      .then(res => {
        console.log(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  /* 里面的vant-row溢出了 */
  overflow: hidden;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-width: 0 0 1px;
  border-bottom: 1px solid #fff !important;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
.swiper-area {
  clear: both;
  max-height: 12rem;
  overflow: hidden;
}
</style>
