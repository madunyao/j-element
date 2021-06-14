<template>
  <div class="side j-black">
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
          { name: 'sidebar.basicElements', href: 'home' },
          { name: 'sidebar.layout', children: [{ name: 'sidebar.navbar', href: 'navView' }, { name: 'sidebar.card' }, { name: 'sidebar.tab', href: 'tabDivView' }] },
          { name: 'sidebar.modal', href: 'modalView' },
          { name: 'sidebar.banner', href: 'bannerView' }],
      },
    };
  },
  components: {
    sideBar,
  },
};
</script>
<style  scoped>
.sideBar{
  min-height: 100vh;
  z-index: 100;
}
</style>
