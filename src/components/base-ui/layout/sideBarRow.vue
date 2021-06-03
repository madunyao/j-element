<template>
  <div class="sideBarRow" :class="option.check?'check':'nocheck'">
     <div class="sideBarRowName" @click="clickRow(option)">{{option.name}}</div>
     <!-- 非叶子结点 -->
     <div class="sideBarRowList" v-if="option.children && option.children.length>0" >
       <div v-for="(item,index) in option.children" :key="index">
         <sideBarRow :option="item"></sideBarRow>
       </div>
     </div>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
/**
 * option {
 *  data:[{
 *    name:'',
 *    cb:Function,
 *    href:'',
 *    icon:'',
 *    children:[],
 *    width:num,
 *    check:boolean?
 *  }]
 * }
 * }
 */
export default {
  name: 'sideBarRow',
  props: ['option'],
  data() {
    return {

    };
  },
  components: {
  },
  methods: {
    clickRow(option) {
      if (option.children && option.children.length > 0) {
        // eslint-disable-next-line no-param-reassign
        option.check = !option.check;
      } else if (option.href) {
        this.$router.push(option.href);
      } else if (option.cb) {
        option.cb();
      }
    },
  },
  created() {
    console.log(this.option);
  },
  setup() {

  },
};
</script>

<style scoped>
 .check>.sideBarRowList{display: block;}
 .nocheck>.sideBarRowList{display: none;}
</style>
