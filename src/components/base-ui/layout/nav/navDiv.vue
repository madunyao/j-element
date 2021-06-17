<template>
  <div class="navDiv" ref="navDivRef">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'navDiv',
  data() {
    return {

    };
  },
  components: {
  },
  setup() {
    const navDivRef = ref(null);
    onMounted(() => {
      // console.log('navDivRef:');
      // console.log(navDivRef);
    });
    return {
      navDivRef,
    };
  },
};
</script>

<style lang="scss"  scoped>
.navDiv{
  display: flex;
}
</style>
