<template>
  <div class="sideBarRow" :class="option.check?'check':'nocheck'">
     <div class="sideBarRowName" @click="clickRow(option)">{{$t(option.name)}}</div>
     <!-- 非叶子结点 -->
      <transition name="fade">
        <div class="sideBarRowList j-gray" v-if="option.check" >
          <div v-for="(item,index) in option.children" :key="index">
            <sideBarRow :option="item"></sideBarRow>
          </div>
        </div>
     </transition>
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
      show: false,
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
    // console.log(this.option);
  },
  setup() {

  },
};
</script>

<style scoped>
 .check>.sideBarRowList{display: block;}
 .nocheck>.sideBarRowList{display: none;}
 .sideBarRow{
   font-size: 14px;
   border-bottom: 1px solid #fff;
   }
 .sideBarRowName{
   padding: 5px 10px;
   cursor: pointer;
 }

/***************************** */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
/***************************** */

</style>
