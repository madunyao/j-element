<template>
  <div class="navItem" ref="navItemRef" @click.prevent.self ="clickSelf">
    <slot></slot>
    <i v-show="showrightArrow" style="float:right;padding:0 5px;"
    :class="showrightArrow=='1'?'fa fa-chevron-right':'fa fa-chevron-right reverse'"></i>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'navItem',
  data() {
    return {

    };
  },
  components: {
  },
  setup() {
    const navItemRef = ref(null);
    const showrightArrow = ref(0);
    onMounted(() => {
      if (navItemRef.value.querySelectorAll('.navItemList').length > 0) {
        showrightArrow.value = 1;
      }
      navItemRef.value.initSelf = initSelf;
    });
    function clickSelf() {
      if (navItemRef.value.children && navItemRef.value.children.length > 0
      && navItemRef.value.children[0].toogleShow) {
        navItemRef.value.children[0].toogleShow();
        showrightArrow.value = navItemRef.value.children[0].getShowFlag() ? 2 : 1;
      } else if (navItemRef.value.parentNode.hideSelf) {
        navItemRef.value.parentNode.hideSelf();
      }
    }
    function initSelf() {
      if (navItemRef.value.querySelectorAll('.navItemList').length > 0) {
        showrightArrow.value = 1;
      } else {
        showrightArrow.value = 0;
      }
    }
    return {
      navItemRef, clickSelf, showrightArrow,
    };
  },
};
</script>

<style lang="scss"  scoped>
  @import "@/assets/scss/color.scss";
  .navItem{
    background-color: #fff;
    cursor: pointer;
    padding: 5px;
    text-align: left;
    min-width: 80px;
    line-height: 15px;
    &:hover{
      background-color: $gray;
    }

  }
  .fa{
    transition: transform .3s;
  }
  .reverse{
      transform: rotate(180deg);
    }
</style>
