<template>
  <div class="tabDiv" ref="tabDivDom">
    <div class="title-list">
      <div v-for="(rsp,key) in list" :key="key">
        <div @click="showDiv(rsp.id)">{{rsp.name}}</div>
      </div>
    </div>
    <div class="content" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  ref, onMounted, reactive,
} from 'vue';
import { domTool, commonTool } from '@/assets/js/utils';

export default {
  name: 'tabDiv',
  props: ['option'],
  data() {
    return {};
  },
  methods: {
  },
  components: {},
  setup(props) {
    const tabDivDom = ref(null);
    const list = reactive([]);
    const mainData = {
      contents: [],
    };
    function showDiv(id) {
      const cur = commonTool.getObjByKey(mainData.contents, 'id', id);
      domTool.removeClassForList(mainData.contents, 'active');
      // eslint-disable-next-line no-unused-expressions
      cur ? domTool.addClass(cur, 'active') : null;
    }
    function setList(doms) {
      for (let i = 0; i < doms.length; i++) {
        list.push({ id: doms[i].id, name: 'name' });
      }
      console.log(list);
    }
    onMounted(() => {
      mainData.contents = tabDivDom.value.querySelectorAll('div.tab-item');
      setList(mainData.contents);
      showDiv(props.option.active);
    });
    return {
      showDiv,
      tabDivDom,
      list,
    };
  },
};
</script>

<style lang="scss">
  .tabDiv .content{
    .active{
      display: block !important;
    }
    .tab-item{
      display: none;
    }
  }
</style>
