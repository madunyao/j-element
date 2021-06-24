<template>
  <div class="baseSelect" ref="myRef">
    <div class="bs-top one-row-show" @click="toogleFlag=!toogleFlag">
      {{curVal.name}}
      <span><i class="fa fa-angle-down" :class="toogleFlag?'reverse':''"/></span>
    </div>
    <div class="bs-bottom" v-show="toogleFlag" @mouseleave="toogleFlag=false">
        <input class="bs-search" type="text" v-model="keyWord">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="clickItem(item)"
              :class="curVal.val==item.val?'selected':''">
              {{item.name}}
            </li>
        </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {
  ref, onMounted, watchEffect,
} from 'vue';
import { arrayTool } from '@/assets/js/utils';

export default {
  name: 'myvue',
  data() {
    return {

    };
  },
  props: ['option', 'val', 'modelValue'],
  components: {},
  setup(props, context) {
    const curVal = ref({ val: null, name: null });
    const toogleFlag = ref(false);
    const keyWord = ref(null);
    const list = ref(null);
    const myRef = ref(null);
    onMounted(() => {
      list.value = JSON.parse(JSON.stringify(props.option.list));
      curVal.value.val = props.val;
      myRef.value.val = props.val;
      curVal.value.name = arrayTool.getValByKey(props.option.list, 'val', 'name', props.val);
    });
    function clickItem(item) {
      curVal.value = item;
      myRef.value.val = item.val;
      toogleFlag.value = false;
      context.emit('update:val', item.val);
    }
    function filterItem(kw) {
      if (!kw) {
        list.value = JSON.parse(JSON.stringify(props.option.list));
        return;
      }
      const tempList = [];
      if (props.option.list) {
        for (const item of props.option.list) {
          if (item.name.includes(kw)) {
            tempList.push(item);
          }
        }
      }
      list.value = JSON.parse(JSON.stringify(tempList));
    }
    watchEffect(() => {
      filterItem(keyWord.value);
    });
    return {
      curVal, toogleFlag, keyWord, list, myRef, clickItem,
    };
  },

};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/color.scss";
  .baseSelect{
    min-width: 80px;
    position: relative;
    font-size: 14px;;
    .bs-top{
      padding: 0 10px;
      padding-right: 15px;
      border: 1px solid #eee;
      position: relative;
      height: 2em;
      line-height: 2em;
      span{
        right: 8px;
        position:absolute;
        i{line-height: 1.2em;}
        i.reverse{
          transform: rotate(180deg);
        }
      }
    }
    .bs-bottom{
      position:absolute;
      top: 2.1em;
      border: 1px solid #eee;
      padding: 5px;
      background-color: #fff;
      z-index: 1000;
      input{
        height: 2em;
        border: 2px solid #999;
        padding: 2px 5px;
        margin: 5px 0;
      }
      ul{
        max-height:300px;
        overflow-y: auto;
      }
      li{
        min-height: 1.5em;
        line-height: 1.5em;
        cursor: pointer;
        &:hover{
          background-color: #eee;
        }
      }
      li.selected{
        background-color: $blue;
        color: #fff;
      }
    }
  }
</style>
