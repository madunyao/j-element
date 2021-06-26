<template>
  <div class="navDiv" ref="navDivRef">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { ref, onMounted } from 'vue';
import { domTool } from '@/assets/js/utils';

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
      if (navDivRef.value.getAttribute('vertical')) {
        domTool.addClass(navDivRef.value, 'vertical');
      }
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
.navDiv.vertical{
    flex-direction: column;

}
</style>
