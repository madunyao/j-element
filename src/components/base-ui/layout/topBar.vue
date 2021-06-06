<template>
  <div class="topBar">
    <div class="topBarItem j-w-green">
      J-ELEMENT
    </div>
    <div class="topBarItem" style="flex-grow:1">
    </div>
    <div class="topBarItem">
      {{$t('topBar.language')}}：
      <select v-model="defaultLanguage" @click="changeLaanguage" class="j-white">
        <option value="ch">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue';

export default {
  name: 'topBar',
  data() {
    return {
    };
  },
  components: {
  },
  setup() {
    const defaultLanguage = ref('ch');
    return {
      defaultLanguage,
    };
  },
  methods: {
    changeLaanguage() {
      this.$root.$i18n.locale = `${this.defaultLanguage}`;
    },
  },
};

</script>

<style  scoped>
  .topBar{
    width: 100%;
    min-height: 40px;
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    flex-direction: row;
    font-size: 16px;
  }
  .topBarItem{
    line-height: 40px;
    margin: 0 40px;
  }
</style>
