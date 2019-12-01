<template>
<!-- // 带分页器的 -->

  <div>
    <swiper :options="swiperOption">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in slide"
        :key="index + Math.random()"
      >
        slide{{ item }}
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  data() {
    return {
      slide: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        // 是否最后一屏的时候滚动回第一屏
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          // 分页器是否可以点击自动选择
          clickable:true
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.swiper-slide {
  height: 4rem;
  text-align: center;
  padding-top: 3rem;
  border-bottom: 1px solid #ccc;
}
</style>
