<template>
 <transition name="fade">
<div class="modal-wrap" @click.self="closeModal" v-show="showFlag"
     ref="modalDom" :class="option.side">
  <div class="modal">
      <div class="modal-top">
        <a class="fa fa-times" href="" @click.prevent="closeModal"></a>
      </div>
      <div class="modal-content">
        <slot name="content"></slot>
      </div>
      <div class="buts-wrap" v-if="option && !option.hideButton">
        <button class="j-yellow-h" @click="submitModal">确定</button>
        <button class="j-gray-h" @click="closeModal">关闭</button>
      </div>
  </div>
</div>
 </transition>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { ref } from 'vue';
import { domTool } from '@/assets/js/utils';

export default {
  name: 'modal',
  props: ['option'],
  data() {
    return {

    };
  },
  components: {
  },
  setup(props) {
    const showFlag = ref(false);
    const modalDom = ref(modalDom);
    function closeModal() {
      // 显示滚动条
      const html = document.getElementsByTagName('html')[0];
      domTool.removeClass(html, 'hide-overflow');
      showFlag.value = false;
    }
    function openModal() {
      // 隐藏滚动条
      const html = document.getElementsByTagName('html')[0];
      domTool.addClass(html, 'hide-overflow');
      showFlag.value = true;
    }
    function submitModal() {
      if (props.option.submit) {
        props.option.submit();
      }
      if (modalDom.value && modalDom.value.submitModal) {
        modalDom.value.submitModal();
      }
      showFlag.value = false;
    }
    return {
      closeModal,
      submitModal,
      openModal,
      modalDom,
      showFlag,
    };
  },
};
</script>

<style lang="scss" scoped>
html{overflow-y: hidden;}
.modal-wrap{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.6);
    .modal{
      background: #fff;
      min-width: 30%;
      max-width: 50%;
      padding: 20px 15px;
      padding-top: 30px;
      margin-bottom: 10%;
      position: relative;
    }
}
.modal-wrap.right{
  justify-content: flex-end;
  .modal{
    height: 100%;
    margin: 0;
  }
}
.modal-wrap.top{
  justify-content: center;
  align-items: flex-start;
  .modal{
    min-height: 40px;
    margin: 0;
    min-width:100%
  }
}
.modal-wrap .modal .modal-content{
  padding: 5px;
  min-height: 80px;
}
.modal-wrap .modal .modal-top{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    height: 25px;
    width: 100%;
    a{
      font-size: 15px;
      margin: 5px 5px 0 0;
    }
}
</style>
