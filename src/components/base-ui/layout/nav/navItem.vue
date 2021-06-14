<template>
  <div class="navItem">
    <slot></slot>
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
    onMounted(() => {
      console.log('navItemRef:');
      console.log(navItemRef);
    });
    return {
      navItemRef,
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
    line-height: 15px;
    &:hover{
      background-color: $gray;
    }

  }
</style>
