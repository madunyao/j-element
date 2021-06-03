<template>
  <div class="sideBar">
    <div v-for="(row,index) in option.children" :key="index">
        <sideBarRow :option="row"></sideBarRow>
    </div>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
import sideBarRow from './sideBarRow.vue';
/**
 * option {
 *  data:[{
 *    name:'',
 *    cb:Function,
 *    href:'',
 *    icon:'',
 *    children:[],
 *    width:num
 *  }]
 * }
 * }
 */
export default {
  name: 'sideBar',
  props: ['option'],
  data() {
    return {

    };
  },
  components: {
    sideBarRow,
  },
};
</script>

<style  scoped>
  .sideBar {
    width: 200px;
    height: 99vh;
    display: block;
    border:1px solid #000;
  }

</style>
