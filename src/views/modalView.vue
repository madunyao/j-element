<template>
  <div class="modalView">
     <div class="buts-wrap">
       <span >基础模态框：</span>
        <button class="j-blue-h" @click="showBasicModal()">显示Modal</button>
     </div>
     <div class="buts-wrap">
       <span >侧边模态框：</span>
        <button class="j-blue-h" @click="showBasicModalRight();">显示Modal</button>
     </div>
     <div class="buts-wrap">
       <span >顶部模态框：</span>
        <button class="j-blue-h" @click="showBasicModalTop();">显示Modal</button>
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
     <!-- 侧边模态框 -->
     <modal ref="modalRefRight" :option="modalOptionRight">
        <template v-slot:content >
          请确认信息是否正确？
          <p>
            用户名：李四
          </p>
        </template>
     </modal>
     <!-- 顶部模态框 -->
     <modal ref="modalRefTop" :option="modalOptionTop">
        <template v-slot:content >
          请确认信息是否正确？
          <p>
            用户名：王五
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
    const modalRefRight = ref(null);
    const modalRefTop = ref(null);
    const modalOption = reactive({
      hideButton: false,
      submit() {
        console.log('提交模态框成功！');
      },
    });
    const modalOptionRight = reactive({
      hideButton: true,
      side: 'right',
    });
    const modalOptionTop = reactive({
      hideButton: false,
      side: 'top',
    });
    function showBasicModal() {
      modalRef.value.openModal();
    }
    function showBasicModalRight() {
      modalRefRight.value.openModal();
    }
    function showBasicModalTop() {
      modalRefTop.value.openModal();
    }
    return {
      modalRef,
      modalRefRight,
      modalRefTop,
      modalOption,
      modalOptionRight,
      modalOptionTop,
      showBasicModal,
      showBasicModalRight,
      showBasicModalTop,
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
