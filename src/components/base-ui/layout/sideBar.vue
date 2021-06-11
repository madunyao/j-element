<template>
  <div class="sideBar" :class="toogleFlag?'toogle':''">
    <i class="fa fa-magnet control-width" @click="toogleFlag=!toogleFlag"></i>
    <div class="content">
      <div v-for="(row,index) in option.children" :key="index">
        <sideBarRow :option="row"></sideBarRow>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
import sideBarRow from './sideBarRow.vue';

export default {
  name: 'sideBar',
  props: ['option'],
  data() {
    return {
      toogleFlag: false,
    };
  },
  methods: {
  },
  components: {
    sideBarRow,
  },
};
</script>

<style  scoped>
  .sideBar {
    width: 200px;
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    text-align: left;
    padding-top: 30px;
    transition:width .7s;
  }
  .sideBar .content{
    min-width: 200px;
    margin-top: 10px;
  }
  .sideBar.toogle{
    width: 35px;
  }
  i.control-width{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
  }
  i.control-width:hover{
    color: #1bbc9b;
  }

</style>
