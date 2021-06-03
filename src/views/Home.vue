<template>
  <div class="home">
   HOME
   <button @click="show = !show">
    Toggle
  </button>
    <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import sideBar from '@/components/base-ui/layout/sideBar.vue';
export default {
  name: 'Home',
  data() {
    return {
      show: true,
    };
  },
  components: {},
};
</script>
<style  scoped>

</style>
