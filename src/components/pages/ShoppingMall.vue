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
          <img
            v-lazy="item.image"
            alt=""
            width="100%"
            height="240px"
            srcset=""
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type bar -->
    <div class="type-bar">
      <div v-for="(item, index) in category" :key="index + Math.random()">
        <img v-lazy="item.image" width="90%" />
        <span>{{ item.mallCategoryName }}</span>
      </div>
    </div>
    <!-- 广告条 -->
    <div><img v-lazy="advertesPicture" width="100%" /></div>
    <!-- 商品推荐区域 -->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOptions">
          <swiper-slide
            v-for="(item, index) in recommendGoods"
            :key="index + Math.random()"
          >
            <div class="recommend-item">
              <img v-lazy="item.image" width="80%" />
              <div>{{ item.goodsName }}</div>
              <div>¥{{ item.price|moneyFilter }}/¥{{ item.mallPrice|moneyFilter }}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- swiper -->
    <!-- <swiper-default></swiper-default> -->
    <!-- swiper2 -->
    <!-- <swiper-default2></swiper-default2> -->
    <!-- swiper3 -->
    <!-- <swiper-default3 ></swiper-default3> -->
    <!-- swiperTest -->
    <!-- <swiper-test ></swiper-test> -->
    <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
     <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
    <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component> 
    <!--Hot Area-->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
            <!--这里需要一个list组件-->
                <van-list>
                    <van-row gutter="20">
                        <van-col span="12" v-for="(item , index) in hotGoods" :key="index">
                                <goods-info :goodsId="item.goodsId" :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price">

                                </goods-info>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
   
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
// import swiperDefault from "../swiper/swiperDefault";
// import swiperDefault2 from "../swiper/swiperDefault2";
// import swiperDefault3 from "../swiper/swiperDefault3";
// import swiperTest from "../swiper/swiperTest";
import floorComponent from "../component/floorComponent";
import goodsInfo from "../component/goodsInfoComponent";
import url from "@/serviceAPI.config.js";
debugger



// 引入数据加工
import {toMoney} from '@/filter/moneyFilter.js'


export default {
  data() {
    return {
      msg: "Shopping Mall",
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [],
      category: [],
      advertesPicture: "",
      recommendGoods: [],
      swiperOptions: {
        // 每一屏显示几个
        slidesPerView: 3
      },
      floor1: null,
      floor2: null,
      floor3: null,

      floorName:{},
      // floor1_0: [],
      // floor1_1: [],
      // floor1_2: [],
      hotGoods:[],  //热卖商品
    };
  },
  filters: {
    moneyFilter: function(money) {
      return toMoney(money);
    }
  },
  created() {
    this.$axios
      .get("/48192/api/index")
      .then(res => {
        console.log(res.data.data);
        if (res.status === 200) {
          this.category = res.data.data.category;
          this.advertesPicture = res.data.data.advertesPicture.PICTURE_ADDRESS;
          this.bannerPicArray = res.data.data.slides;
          this.recommendGoods = res.data.data.recommend;
          this.floor1 = res.data.data.floor1;
          this.floor2 = res.data.data.floor2;
          this.floor3 = res.data.data.floor3;

          this.floorName=res.data.data.floorName;
          // this.floor1_0 = res.data.data.floor1[0];
          // this.floor1_1 = res.data.data.floor1[1];
          // this.floor1_2 = res.data.data.floor1[2];
          this.hotGoods=res.data.data.hotGoods;

        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    swiper,
    swiperSlide,
    // swiperDefault,
    // swiperDefault2,
    // swiperDefault3,
    // swiperTest,
    floorComponent,
    goodsInfo
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
.type-bar {
  background-color: #fff;
  margin: 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  /* 横向布局 */
  flex-direction: row;
  /* 不换行  */
  flex-wrap: nowrap;
}
.type-bar > div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
  /* flex:1,保证等分，避免图片大小不统一的情况发生 */
  flex: 1;
}

.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}

 .hot-area{
        text-align: center;
        font-size:14px;
        height: 1.8rem;
        line-height:1.8rem;
    }

</style>
