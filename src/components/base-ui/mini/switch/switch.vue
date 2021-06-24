<template>
  <div class="switch" ref="myRef">
    <!-- 实现父组件和子组件之间的双向传值 -->
    <input type="checkbox" :checked="modelValue" :id="uuid" style="display:none;"
    @change="$emit('update:modelValue', $event.target.checked)" />
    <!-- 伪装的开关样式 -->
    <label :for="uuid">
      <div class="swt-wrap" :class="modelValue?'on':'off'">
        <div class="swt-circle"></div>
      </div>
    </label>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
import { ref, onMounted } from 'vue';
import { commonTool } from '@/assets/js/utils';

export default {
  name: 'myvue',
  data() {
    return {};
  },
  components: { },
  props: ['modelValue'],
  setup() {
    const uuid = ref(commonTool.guid());
    const myRef = ref(null);
    onMounted(() => {
      // console.log(props.modelValue);
    });
    return { uuid, myRef };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/color.scss";
  .switch{
    .swt-wrap{
      width:2.5em;
      height: 1em;
      border-radius: 0.5em;
      background-color: $blue;
      .swt-circle{
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: $gray;
        float: left;
      }
    }
    .swt-wrap.on{
      background-color: $green;
      .swt-circle{
        float: right;
      }
    }
  }
</style>
