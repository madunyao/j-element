<template>
  <div class="tabDivView">
    <TabDiv ref="tabRef" :option="optionData" style="margin-top:10px">
        <template v-slot >
          <div class="tab-item active" id="a" name="Angular">
            <p>Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。</p>
          </div>
          <div class="tab-item" id="b" name="Vue">
            <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。 </p>
          </div>
          <div class="tab-item" id="c" name="React">
            <p>React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。</p>
          </div>
        </template>
    </TabDiv>
    <TabDiv :option="optionData2" style="margin-top:30px">
        <template v-slot >
          <div class="tab-item active" id="a" name="Angular">
            <p>Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。</p>
          </div>
          <div class="tab-item" id="b" name="Vue">
            <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。 </p>
          </div>
          <div class="tab-item" id="c" name="React">
            <p>React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。</p>
          </div>
        </template>
    </TabDiv>
    <TabDiv :option="optionData3" style="margin-top:30px">
        <template v-slot >
          <div class="tab-item active" id="a" name="Angular">
            <p>Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。</p>
          </div>
          <div class="tab-item" id="b" name="Vue">
            <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。 </p>
          </div>
          <div class="tab-item" id="c" name="React">
            <p>React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。</p>
          </div>
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
    return {
      optionData: { active: 'a', color: 'green' },
      optionData2: { active: 'a', color: 'blue' },
      optionData3: { active: 'a', color: 'yellow' },
    };
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
.tabDivView{
  p{
    margin: 20px;
    text-align: left;
  }
}

</style>
