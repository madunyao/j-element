<template>
  <div class="tabDivView">
    <TabDiv ref="tabRef" :option="optionData">
        <template v-slot >
          <div class="tab-item active" id="a" name="A">aaaa</div>
          <div class="tab-item" id="b" name="B">bbbb</div>
          <div class="tab-item" id="c" name="C">cccc</div>
        </template>
    </TabDiv>
  </div>

</template>

<script>
import {
  ref,
} from 'vue';
import TabDiv from '../components/base-ui/layout/tabDiv.vue';

export default {
  name: 'tabDivView',
  data() {
    return { optionData: { active: 'a' } };
  },
  methods: {
  },
  components: { TabDiv },
  setup() {
    const tabRef = ref(null);
    return {
      tabRef,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
