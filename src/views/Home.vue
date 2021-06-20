<template>
  <div class="home">
    <div class="row">
      <div>按钮：</div>
      <button :class="item" v-for="(item,key) in colors" :key="key">
        OK
      </button>
    </div>
    <div class="row">
      <div>调节：</div>
      <Slider></Slider>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import sideBar from '@/components/base-ui/layout/sideBar.vue';
import { ref } from 'vue';
import Slider from '../components/base-ui/mini/slider/slider.vue';

export default {
  name: 'Home',
  data() {
    return {
      show: true,
    };
  },
  components: { Slider },
  setup() {
    const colors = ref(['j-red-h', 'j-blue-h', 'j-yellow-h', 'j-green-h', 'j-gray-h', 'j-white-h']);
    return { colors };
  },
};
</script>
<style  scoped>
  .row{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px
  }

</style>
