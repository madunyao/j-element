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
      <Slider curVal="50" maxVal="100"></Slider>
    </div>
    <div class="row">
      <div>下拉框（搜索）：</div>
      <BaseSelect :option="optForSelect" :val="optForSelect.cur" class="BaseSelect"></BaseSelect>
    </div>
    <div class="row">
      <div>开关：</div>
      <Switch v-model="switchVal"></Switch>
     （值：{{switchVal}}）
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import sideBar from '@/components/base-ui/layout/sideBar.vue';
import { ref, watchEffect, reactive } from 'vue';
import Slider from '../components/base-ui/mini/slider/slider.vue';
import BaseSelect from '../components/base-ui/select/baseSelect.vue';
import Switch from '../components/base-ui/mini/switch/switch.vue';

export default {
  name: 'Home',
  data() {
    return {
      show: true,
    };
  },
  components: { Slider, BaseSelect, Switch },
  setup() {
    const colors = ref(['j-red-h', 'j-blue-h', 'j-yellow-h', 'j-green-h', 'j-gray-h', 'j-white-h']);
    const opt1 = reactive({ num: 0 });
    const optForSelect = reactive({
      cur: 'ch',
      list: [{ name: '中国', val: 'ch' }, { name: '美国', val: 'us' },
        { name: '英国', val: 'en' }, { name: '日本', val: 'jpa' }],
    });
    const switchVal = ref(false);
    watchEffect(() => console.log(opt1.curval));
    return {
      colors, opt1, optForSelect, switchVal,
    };
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
  .BaseSelect{
    width: 150px;;
  }

</style>
