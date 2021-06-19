<template>
  <div class="dragItem" draggable="true" @dragstart="ondragstart" @dragend="ondragend">
     <slot></slot>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { commonTool } from '@/assets/js/utils';

export default {
  name: 'dragItem',
  data() {
    return {

    };
  },
  components: {},
  setup() {
    function ondragstart(event) {
      event = event || window.event;
      console.log('开始拖拽');
      if (!event.target.id) {
        event.target.id = commonTool.guid();
      }
      event.dataTransfer.setData('dragTargetId', event.target.id);
      console.log(event);
    }
    function ondrag() {
      console.log('拖拽中');
    }
    function ondragend() {
      console.log('拖拽结束');
    }
    return {
      ondragstart,
      ondrag,
      ondragend,
    };
  },
};
</script>

<style  scoped>

</style>
