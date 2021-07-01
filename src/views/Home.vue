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
      <BaseSelect :option="optForSelect" :val="optForSelect.cur" class="BaseSelect"
        @update:val="(p)=>{optForSelect.cur=p}"></BaseSelect>
      （值：{{optForSelect.cur}}）
    </div>
    <div class="row">
      <div>开关：</div>
      <Switch v-model="switchVal"></Switch>
     （值：{{switchVal}}）
    </div>
    <div class="row">
      <div>进度条：</div>
      <ProgresBar :val="progresBarVal" style="width:200px;"></ProgresBar>
      <input type="number" number v-model="progresBarVal">
    </div>
    <div class="row">
      <div>提示消息：</div>
      <button class="j-green-h" @click="showToast()">
        成功
      </button>
      <button class="j-yellow-h" @click="showWarn()">
        警告
      </button>
      <button class="j-red-h" @click="showError()">
        失败
      </button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import sideBar from '@/components/base-ui/layout/sideBar.vue';
import { ref, watchEffect, reactive } from 'vue';
import Switch from '../components/base-ui/mini/switch/switch.vue';
import Slider from '../components/base-ui/mini/slider/slider.vue';
import BaseSelect from '../components/base-ui/select/baseSelect.vue';
import ProgresBar from '../components/base-ui/mini/progresBar/progresBar.vue';
import ToastUtiles from '../components/base-ui/mini/toast/toast';

export default {
  name: 'Home',
  data() {
    return {
      show: true,
    };
  },
  components: {
    Slider, BaseSelect, Switch, ProgresBar,
  },
  setup() {
    const colors = ref(['j-red-h', 'j-blue-h', 'j-yellow-h', 'j-green-h', 'j-gray-h', 'j-white-h']);
    const opt1 = reactive({ num: 0 });
    const optForSelect = reactive({
      cur: 'CN',
      list: [{ name: '中国', val: 'CN' }, { name: '美国', val: 'US' },
        { name: '英国', val: 'UK' }, { name: '日本', val: 'JP' }],
    });
    const switchVal = ref(false);
    watchEffect(() => (opt1.curval ? console.log(opt1.curval) : ''));
    const progresBarVal = ref(60);
    function showToast() {
      ToastUtiles.toast('操作成功！');
    }
    function showWarn() {
      ToastUtiles.warn('操作异常！');
    }
    function showError() {
      ToastUtiles.error('操作失败！');
    }
    return {
      colors,
      opt1,
      optForSelect,
      switchVal,
      progresBarVal,
      showToast,
      showWarn,
      showError,
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
  input[number]{
    font-size:2em;
    border:1px solid #eee;
    width:100px;
    text-align:center;
    margin: 0 10px;
  }

</style>
