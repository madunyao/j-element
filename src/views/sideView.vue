<template>
  <div class="side">
     <sideBar :option="option"/>
  </div>
</template>

<script>
// @ is an alias to /src
import sideBar from '@/components/base-ui/layout/sideBar.vue';

export default {
  name: 'side',
  data() {
    return {
      option: {
        children: [
          { name: '1', href: '/' },
          { name: '2', children: [{ name: '2.1' }, { name: '2.2' }, { name: '2.3' }] },
          { name: '3', href: 'about' }],
      },
    };
  },
  components: {
    sideBar,
  },
};
</script>
<style  scoped>

</style>
