<template>
<div class="modal-wrap" v-show="showFlag">
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
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { ref } from 'vue';

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
    function closeModal() {
      showFlag.value = false;
    }
    function openModal() {
      showFlag.value = true;
    }
    function submitModal() {
      if (props.option.submit) {
        props.option.submit();
      }
      showFlag.value = false;
    }
    return {
      closeModal,
      submitModal,
      openModal,
      showFlag,
    };
  },
};
</script>

<style lang="scss" scoped>
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
