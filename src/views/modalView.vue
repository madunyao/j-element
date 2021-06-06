<template>
  <div class="modalView">
     modal view
     <modal></modal>
     <input type="text">
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
import modal from '@/components/base-ui/modal/modal.vue';

export default {
  name: 'modalView',
  data() {
    return {

    };
  },
  components: {
    modal,
  },
};
</script>

<style  scoped>
</style>
