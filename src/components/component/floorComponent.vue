<template>
  <div>
    <div class="floor">
        <div class="floor-title">{{floorTitle}}</div>
      <div class="floor-animaly">
        <div class="floor-one">
          <img :src="floorData0.image" width="100%" />
        </div>
        <div>
          <div class="floor-one">
            <img :src="floorData1.image" width="100%" />
          </div>
          <div class="floor-one">
            <img :src="floorData2.image" width="100%" />
          </div>
        </div>
      </div>
    </div>
    <div class="floor_rule">
      <div
        v-for="(item, index) in surplusFloorData"
        :key="index + Math.random()"
      >
        <img :src="item.image" alt="" srcset="" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      floorData0: [],
      floorData1: [],
      floorData2: []
    };
  },
  props: ["floorData","floorTitle"],
  created() {},
  computed: {
    surplusFloorData() {
      if (this.floorData) {
        return this.floorData.slice(3);
      }
    }
  },
  watch: {
    floorData(newValue, oldValue) {
      console.log(newValue, oldValue);
    //   if (newValue) {
        this.floorData0 = this.floorData[0];
        this.floorData1 = this.floorData[1];
        this.floorData2 = this.floorData[2];
    //   }
    }
  }
};
</script>

<style scoped>
.floor-title{
    text-align: center;
    font-size: 14px;
    height: 1.8rem;
    line-height: 1.8rem;
    color: #e5017d;
    font-weight: 600;
}
.floor-animaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-animaly div {
  width: 10rem;
  box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #ddd;
}
.floor-two {
  border-bottom: 1px solid #ddd;
}

.floor_rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}
.floor_rule > div {
  box-sizing: border-box;
  width: 10rem;
  border-bottom: 1px solid #ddd;
}
.floor_rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}
</style>
