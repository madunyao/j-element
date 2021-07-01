<template>
  <div class="navSub" ref="navSubRef" @mouseleave="hideShow()">
    <div class="navSubName j-blue-h"
    @click="showChildren">
      {{option.name}}
    </div>
    <div class="itemsWrap" :class="option.showItem?'':'hide'"
    ref="itemsWrapRef" @mouseleave="hideShow()">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'navSub',
  data() {
    return {

    };
  },
  components: {
  },
  setup() {
    const navSubRef = ref(null);
    const itemsWrapRef = ref(null);
    const option = ref({});
    option.value.showItem = false;
    const itemHeight = 25;
    onMounted(() => {
      option.value.name = navSubRef.value.getAttribute('name');
      const childrenNum = navSubRef.value.querySelectorAll('.navItem') ? navSubRef.value.querySelectorAll('.navItem').length : 0;
      if (childrenNum > 0) {
        option.value.childrenNum = childrenNum;
        const itemsWrap = navSubRef.value.querySelector('.itemsWrap');
        itemsWrap.style.maxHeight = `${itemHeight * childrenNum + 2}px`;
      }
      itemsWrapRef.value.hideSelf = hideShow;
    });
    function hideShow() {
      const navItemList = navSubRef.value.querySelectorAll('.navItemList');
      if (navItemList && navItemList.length > 0) {
        for (const item of navItemList) {
          item.hideSelf();
        }
      }
      const navItems = navSubRef.value.querySelectorAll('.navItem');
      if (navItems && navItems.length > 0) {
        for (const item of navItems) {
          item.initSelf();
        }
      }
      option.value.showItem = false;
    }
    function showChildren() {
      if (navSubRef.value.parentNode.getAttribute('vertical')) {
        itemsWrapRef.value.style.left = `${navSubRef.value.offsetWidth}px`;
        itemsWrapRef.value.style.top = '0';
      }
      // eslint-disable-next-line no-unused-expressions
      option.value.childrenNum ? option.value.showItem = !option.value.showItem : '';
    }
    return {
      navSubRef,
      itemsWrapRef,
      option,
      hideShow,
      showChildren,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/color.scss";
  .navSub{
    margin:1px 1px;
    position: relative;
    .itemsWrap{
      // width: 100%;
      position: absolute;
      border:1px solid $blue;
      overflow-y: hidden;
      z-index: 50 !important;
      // transition:max-height .5s;
      transition-property: max-height, border-color;
      transition-duration:.5s, .6s;
    }
    .itemsWrap.hide{
      max-height: 0 !important;
      border-color : transparent;
    }
  }
  .navSub .navSubName{
    padding: 10px 20px;
    cursor: pointer;
  }
</style>
