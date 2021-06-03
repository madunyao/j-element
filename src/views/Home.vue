<template>
  <div class="home">
    <sideBar :option="option"/>
    <div class="routeWrap"><router-view/></div>
  </div>
</template>

<script>
// @ is an alias to /src
import sideBar from '@/components/base-ui/layout/sideBar.vue';
/**
 * option {
 *  data:[{
 *    name:'',
 *    cb:Function,
 *    href:'',
 *    icon:'',
 *    children:[],
 *    width:num,
 *    check:boolean?
 *  }]
 * }
 * }
 */
export default {
  name: 'Home',
  data() {
    return {
      option: {
        children: [
          { name: '1' },
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
  .home {
    display: flex;
  }

</style>
