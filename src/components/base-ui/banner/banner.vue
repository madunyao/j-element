<template>
  <div class="banner" ref="bannerDom">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { ref, onMounted, onBeforeMount } from 'vue';
import { domTool } from '@/assets/js/utils';

export default {
  name: 'banner',
  props: ['option'],
  data() {
    return {};
  },
  components: {},
  setup(props) {
    const bannerDom = ref(null);
    const InterWork = null;
    let interTime = props.option.time ? props.option.time : 5000;
    interTime = interTime < 1000 ? 1000 : interTime;
    function getActiveNodeIndex(doms) {
      for (let i = 0; i < doms.length; i += 1) {
        if (domTool.hasClass(doms[i], 'active')) return i;
      }
      return 0;
    }
    onBeforeMount(() => {
      if (InterWork) {
        clearInterval(InterWork);
      }
    });
    onMounted(() => {
      // console.log(bannerDom.value);
      const items = bannerDom.value.children;
      if (!items || items.length === 0) {
        return;
      }
      setInterval(() => {
        const index = getActiveNodeIndex(items);
        domTool.removeClass(items[(index - 1 + items.length) % items.length], 'active-before');
        domTool.removeClass(items[index], 'active');
        domTool.addClass(items[index], 'active-before');
        domTool.addClass(items[(index + 1) % items.length], 'active');
      }, interTime);
    });
    return { bannerDom };
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
}
</style>
