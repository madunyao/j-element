<template>
  <div class="progresBar" ref="myref">
    <div class="progresBarCur" :style="'width:'+Math.min(val,100)+'%'">
      <img src="/pic/icon/fruits/lemon-g.svg" alt="">
      <img src="/pic/icon/fruits/lemon-g.svg" alt="" v-for="index of picNum" :key="index">
    </div>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref, onMounted } from 'vue';

export default {
  name: 'myvue',
  data() {
    return {

    };
  },
  props: ['val'],
  components: {},
  setup() {
    const myref = ref(null);
    const picNum = ref(0);
    onMounted(() => {
      // console.log(myref.value.offsetWidth);
      // console.log(myref.value.querySelector('img').offsetWidth);
      const num = Math.trunc(myref.value.offsetWidth / myref.value.querySelector('img').offsetWidth);
      picNum.value = num - 1 > 0 ? num - 1 : 0;
    });
    return { myref, picNum };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/color.scss";
  .progresBar{
    width: 100%;
    min-width: 100px;
    height: 3em;
    line-height: 3em;
    background-color: $gray;
    border-radius: 1.5em;
    overflow: hidden;
    .progresBarCur{
      overflow: hidden;
      position: relative;
      background-color: $green;
      border-radius: 1.5em;
      height: 100%;
      display: flex;
      flex-wrap: nowrap;
      img{
        width: 2.5em;
        padding: 0 1px;
        animation:turn 10s linear infinite;
      }
    }
    @keyframes turn{
      0%{-webkit-transform:rotate(0deg);}
      25%{-webkit-transform:rotate(90deg);}
      50%{-webkit-transform:rotate(180deg);}
      75%{-webkit-transform:rotate(270deg);}
      100%{-webkit-transform:rotate(360deg);}
    }

  }

</style>
