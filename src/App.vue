<template>
  <div class="el-body">
    <div class="sideWrap">
      <sideView></sideView>
    </div>
    <div class="mainWrap">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sideView from '@/views/sideView.vue';

export default {
  name: 'App',
  data() {
    return {
    };
  },
  components: { sideView },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/***********************************/
.el-body{
  display: flex;
}
.mainWrap{
  flex-grow: 1;
}
</style>
