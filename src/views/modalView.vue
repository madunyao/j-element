<template>
  <div class="modalView">
     <div class="buts-wrap">
       <span >基础模态框：</span>
        <button class="j-blue-h" @click="showBasicModal()">显示Modal</button>
     </div>
     <!-- 基础模态框 -->
     <modal ref="modalRef" :option="modalOption">
        <template v-slot:content >
          请确认信息是否正确？
          <p>
            用户名：张三
          </p>
      </template>
     </modal>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
import modal from '@/components/base-ui/modal/modal.vue';
import { ref, reactive } from 'vue';

export default {
  name: 'modalView',
  data() {
    return {

    };
  },
  components: {
    modal,
  },
  setup() {
    const modalRef = ref(null);
    const modalOption = reactive({
      hideButton: false,
      submit() {
        console.log('提交模态框成功！');
      },
    });
    function showBasicModal() {
      modalRef.value.openModal();
    }
    return {
      showBasicModal,
      modalRef,
      modalOption,
    };
  },
};
</script>

<style lang="scss" scoped>
  .buts-wrap{
    justify-content:
    flex-start;margin:20px;
    span{
      font-size: 1rem;
      line-height: 2.5rem;
    }
  }
</style>
