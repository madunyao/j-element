<template>
  <div class="dragContainer" @dragenter="ondragenter" @dragleave="ondragleave" @dragover.prevent=""
   @drop.self="ondrop" >
     <slot></slot>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { domTool } from '@/assets/js/utils';

export default {
  name: 'dragContainer',
  data() {
    return {

    };
  },
  components: { },
  setup() {
    function ondragenter(event) {
      event = event || window.event;
      event.stopPropagation();
      event.preventDefault();
      console.log('进入目标元素');
      // console.log(event);
      domTool.addClass(event.target, 'active');
    }
    function ondragover(event) {
      event = event || window.event;
      console.log('在目标元素中拖拽');
      event.preventDefault();
    }
    function ondragleave(event) {
      console.log('拖放离开目标元素');
      domTool.removeClass(event.target, 'active');
    }
    function ondrop(event) {
      console.log('拖放');
      event = event || window.event;
      console.log(event);
      const dragTargetId = event.dataTransfer.getData('dragTargetId');
      const dragTarget = document.getElementById(dragTargetId);
      event.target.appendChild(dragTarget);
      domTool.removeClass(event.target, 'active');
    }
    return {
      ondragenter, ondragover, ondragleave, ondrop,
    };
  },
};
</script>

<style lang="scss"  scoped>
  @import "@/assets/scss/color.scss";
  .dragContainer{
    min-width: 100px;
    min-height: 100px;
    border: 1px solid #333;
    overflow: hidden;
  }
  .dragContainer.active{
    border: 1px solid $blue;
  }

</style>
