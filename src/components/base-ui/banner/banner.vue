<template>
  <div class="banner" ref="bannerDom"  @mouseleave="mouseLeave"  @mouseenter="mouseEnter">
    <slot></slot>
    <img class="banner-arrow banner-arrow-l" src="/pic/icon/arrow1.svg" alt="" @click="lastPic">
    <img class="banner-arrow banner-arrow-r" src="/pic/icon/arrow1.svg" alt="" @click="nextPic">
    <div class="banner-anchor-wrap">
      <img class="banner-anchor" src="/pic/icon/circle.svg"
        @click="clickAnchor(index)"
        :class="mainData.index==index?'active-anchor':''"
        v-for="(item,index) in mainData.items.length" :key="index" />
    </div>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import {
  ref, reactive, onMounted, onBeforeMount,
} from 'vue';
import { domTool, commonTool } from '@/assets/js/utils';

export default {
  name: 'banner',
  props: ['option'],
  data() {
    return {};
  },
  components: {},
  setup(props) {
    const bannerDom = ref(null);
    const minTime = 1200;
    let InterWork = null;
    let items = [];
    let mouseOn = false;
    const mainData = reactive(
      {
        items: [],
        index: 0,
      },
    );
    let interTime = props.option.time ? props.option.time : 5000;
    interTime = interTime < 1500 ? 1500 : interTime;
    function getActiveNodeIndex(doms) {
      for (let i = 0; i < doms.length; i += 1) {
        if (domTool.hasClass(doms[i], 'active')) return i;
      }
      return 0;
    }
    function initInterWork() {
      if (InterWork) {
        clearInterval(InterWork);
      }
      InterWork = setInterval(() => {
        if (mouseOn) return;
        const index = getActiveNodeIndex(items);
        domTool.removeClassForList(items, 'active');
        domTool.removeClassForList(items, 'active-before');
        domTool.addClass(items[index], 'active-before');
        domTool.addClass(items[(index + 1) % items.length], 'active');
        mainData.index = (index + 1) % items.length;
      }, interTime);
    }
    function mouseEnter() {
      mouseOn = true;
    }
    function mouseLeave() {
      mouseOn = false;
    }
    function clickAnchorRaw(newIndex) {
      if (mainData.index === newIndex) return;
      if (InterWork) {
        clearInterval(InterWork);
      }
      domTool.removeClassForList(items, 'active');
      // domTool.removeClassForList(items, 'active-before');
      domTool.addClass(items[mainData.index], 'active-before');
      domTool.addClass(items[newIndex], 'active');
      setTimeout(() => domTool.removeClassForList(items, 'active-before'), 1050);
      mainData.index = newIndex;
      initInterWork();
    }
    function clickAnchor(newIndex) {
      // 节流
      commonTool.throttleIns(clickAnchorRaw, minTime, newIndex);
    }
    function nextPic() {
      clickAnchor((mainData.index + 1) % items.length);
    }
    function lastPic() {
      clickAnchor((mainData.index - 1 + items.length) % items.length);
    }
    onBeforeMount(() => {
      if (InterWork) {
        clearInterval(InterWork);
      }
    });
    onMounted(() => {
      // items = bannerDom.value.children;
      items = bannerDom.value.querySelectorAll('div.banner-item');
      if (!items || items.length === 0) {
        return;
      }
      mainData.items = items;
      initInterWork();
    });
    return {
      bannerDom, mainData, clickAnchor, nextPic, lastPic, mouseEnter, mouseLeave,
    };
  },
};
</script>

<style lang="scss">
.banner{
  min-width: 100px;
  min-height: 50px;
  overflow: hidden;
  position: relative;
  .banner-item{
    opacity:0;
    z-index:1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(100%,0);
    transition:transform 1s;
    img{
      width: 100%;
    }
  }
  .active{
      opacity:1;
      transform: translate(0,0);
      z-index:2;
  }
  .active-before{
      opacity:1;
      transform: translate(-100%,0);
      z-index:2;
  }
  .banner-anchor-wrap{
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
    display: flex;
    justify-content: center;
    font-size: 14px;
    z-index: 3;
    color: #fff;
    margin-bottom: 5px;
    .banner-anchor{
      margin: 0 5px;
      width: 1rem;
      opacity: 0.6;
      cursor: pointer;
      &:hover {
        opacity: 0.85;
      }
    }
    .active-anchor{
        opacity: 0.85;
    }
  }

  .banner-arrow{
    width: 2rem;
    z-index: 3;
    opacity: 0.6;
    position: absolute;
    top: 50%;
    &:hover {
        opacity: 0.85;
    }
  }
  .banner-arrow-l{
    transform: translateY(-50%);
    left: 10px;
  }
  .banner-arrow-r{
    transform: translateY(-50%) rotate(180deg);
    right: 10px;
  }
}
</style>
