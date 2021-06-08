<template>
  <div class="bannerView">
    <div style="width: 50%;">
      <Banner :option="option" style="width:100%;height:0;padding-bottom:50%">
        <template v-slot >
          <div class="banner-item active">
            <img src="/pic/banner01.jpg" alt="">
          </div>
           <div class="banner-item">
            <img src="/pic/banner02.jpg" alt="">
          </div>
          <div class="banner-item">
            <img src="/pic/banner03.jpg" alt="">
          </div>
        </template>
     </Banner>
    </div>

  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
import Banner from '../components/base-ui/banner/banner.vue';

export default {
  name: 'bannerView',
  data() {
    return {
      option: { time: 5000 },
    };
  },
  components: {
    Banner,
  },
  setup() {

  },
};
</script>

<style  scoped>

</style>
