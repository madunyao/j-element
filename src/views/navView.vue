<template>
  <div class="navView">
    <!-- 水平 -->
    <p class="title-min">水平：</p>
    <navDiv>
      <navSub name="A">
          <navItem>
            A1
            <navItemList>
              <navItem>A1-First</navItem>
              <navItem>
                A1-Second
                <navItemList>
                  <navItem>111</navItem>
                  <navItem>222</navItem>
                  <navItem>333</navItem>
                  <navItem>444</navItem>
                </navItemList>
              </navItem>
            </navItemList>
          </navItem>
        <navItem>A2</navItem>
        <navItem>A3</navItem>
      </navSub>
      <navSub name="B"></navSub>
      <navSub name="C"></navSub>
    </navDiv>
    <!-- 垂直 -->
    <p class="title-min">垂直：</p>
    <navDiv vertical="true" style="width:100px;">
      <navSub name="A">
          <navItem>
            A1
            <navItemList>
              <navItem>A1-First</navItem>
              <navItem>
                A1-Second
                <navItemList>
                  <navItem>111</navItem>
                  <navItem>222</navItem>
                  <navItem>333</navItem>
                  <navItem @click="hw">444</navItem>
                </navItemList>
              </navItem>
            </navItemList>
          </navItem>
        <navItem>A2</navItem>
        <navItem>A3</navItem>
      </navSub>
      <navSub name="B"></navSub>
      <navSub name="C"></navSub>
    </navDiv>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
import navDiv from '@/components/base-ui/layout/nav/navDiv.vue';
import navSub from '@/components/base-ui/layout/nav/navSub.vue';
import navItem from '@/components/base-ui/layout/nav/navItem.vue';
import navItemList from '@/components/base-ui/layout/nav/navItemList.vue';

export default {
  name: 'navView',
  data() {
    return {

    };
  },
  methods: {
    hw() {
      // eslint-disable-next-line no-alert
      alert('hello~');
    },
  },
  components: {
    navDiv, navSub, navItem, navItemList,
  },
};
</script>

<style  scoped>
.navView{
  padding: 10px;
}
p{text-align: left;}
</style>
