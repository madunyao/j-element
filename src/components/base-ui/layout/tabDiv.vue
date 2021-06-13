<template>
  <div class="tabDiv" ref="tabDivDom">
    <div class="title-list">
      <div v-for="(rsp,key) in list" :key="key"
           class="tab-title" :class="curId==rsp.id?activeClass:''">
        <div @click="showDiv(rsp.id)"><a>{{rsp.name}}</a></div>
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
    const activeClass = ref('active');
    const list = reactive([]);
    const mainData = {
      contents: [],
    };
    if (props.option.color) {
      activeClass.value += ` ${props.option.color}`;
    }
    const curId = ref(null);
    function showDiv(id) {
      const cur = commonTool.getObjByKey(mainData.contents, 'id', id);
      domTool.removeClassForList(mainData.contents, 'active');
      // eslint-disable-next-line no-unused-expressions
      cur ? domTool.addClass(cur, 'active') : null;
      curId.value = id;
    }
    function setList(doms) {
      for (let i = 0; i < doms.length; i++) {
        list.push({ id: doms[i].id, name: doms[i].getAttribute('name') });
      }
      // console.log(doms);
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
      curId,
      activeClass,
    };
  },
};
</script>

<style lang="scss">
  @import "@/assets/scss/color.scss";
  .tabDiv .content{
    .active{
      display: block !important;
    }
    .tab-item{
      display: none;
    }
  }
  .tabDiv .title-list{
    display: flex;
    flex-wrap: wrap;
    margin:  0 10px;
    border-bottom: 1px solid $gray;
    .tab-title.active{
      border-color: $green;
    }
    .tab-title{
      border-top: 2px solid;
      border-color: transparent;
      font-size: 1.5rem;
      padding: 5px 15px;
      a{cursor: pointer;}
    }
    .tab-title.active.green{
      border-color: $green;
    }
    .tab-title.active.yellow{
      border-color: $yellow;
    }
    .tab-title.active.blue{
      border-color: $blue;
    }
    .tab-title.active.red{
      border-color: $red;
    }
  }
</style>
