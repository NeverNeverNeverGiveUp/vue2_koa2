<template>
<!-- // 带分页器的,竖排的 -->

  <div>
    <swiper :options="swiperOption" class="swiper">
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
        direction:"vertical",
        pagination: {
          el: ".swiper-pagination"
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
  /* border-bottom: 1px solid #ccc; */
  line-height: 4rem;
}
.swiper{
  height: 7rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #ccc;
}
</style>
