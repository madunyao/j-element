<template>
  <div class="navSub" ref="navSubRef">
    <div class="navSubName j-blue-h" @click="option.showItem=!option.showItem;">
      {{option.name}}
    </div>
    <div class="itemsWrap" :class="option.showItem?'':'hide'" @mouseleave="option.showItem=false">
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
    const option = ref({});
    option.value.showItem = false;
    const itemHeight = 25;
    onMounted(() => {
      console.log('navSubRef:');
      console.log(navSubRef);
      option.value.name = navSubRef.value.getAttribute('name');
      const childrenNum = navSubRef.value.querySelectorAll('.navItem') ? navSubRef.value.querySelectorAll('.navItem').length : 0;
      if (childrenNum > 0) {
        const itemsWrap = navSubRef.value.querySelector('.itemsWrap');
        itemsWrap.style.maxHeight = `${itemHeight * childrenNum + 2}px`;
      }
    });
    return {
      navSubRef,
      option,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/color.scss";
  .navSub{
    margin:0 1px;
    .itemsWrap{
      width: 100%;
      border:1px solid $blue;
      overflow-y: hidden;
      transition:max-height .5s;
    }
    .itemsWrap.hide{
      max-height: 0 !important;
    }
  }
  .navSub .navSubName{
    padding: 10px 20px;
    cursor: pointer;
  }
</style>
