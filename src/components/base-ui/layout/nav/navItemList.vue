<template>
  <div class="navItemList" ref="navItemListRef" v-show="option.showFlag"
    @mouseleave="onMouseleave()">
      <slot></slot>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref, reactive, onMounted } from 'vue';

export default {
  name: 'navItemList',
  data() {
    return {

    };
  },
  components: {
  },
  setup() {
    const navItemListRef = ref(null);
    const option = reactive({ showFlag: false });
    onMounted(() => {
      navItemListRef.value.toogleShow = toogleShow;
      navItemListRef.value.getShowFlag = getShowFlag;
      navItemListRef.value.hideSelf = hideSelf;
    });
    function setPosition() {
      const left = navItemListRef.value.parentNode.offsetWidth;
      const top = navItemListRef.value.parentNode.offsetTop;
      const rectObject = navItemListRef.value.parentNode.getBoundingClientRect();
      navItemListRef.value.style.left = `${left + rectObject.left + 1}px`;
      navItemListRef.value.style.top = `${top}px`;
    }
    function toogleShow() {
      setPosition();
      option.showFlag = !option.showFlag;
    }
    function hideSelf() {
      option.showFlag = false;
    }
    function getShowFlag() {
      return option.showFlag;
    }
    function onMouseleave() {
      option.showFlag = false;
      navItemListRef.value.parentNode.initSelf();
    }
    return {
      navItemListRef,
      option,
      onMouseleave,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/color.scss";
  .navItemList{
    position:absolute;
    margin:0;
    border:1px solid $blue;
    overflow-y: hidden;
    .hide{
      display: none;
    }
  }
</style>
