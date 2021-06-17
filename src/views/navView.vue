<template>
  <div class="navView">
    <navDiv>
      <navSub name="A">
          <navItem>
            A1
            <navItemList>
              <navItem>A1-First</navItem>
              <navItem>
                A1-Second
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
  components: {
    navDiv, navSub, navItem, navItemList,
  },
};
</script>

<style  scoped>
.navView{
  padding: 10px;
}
</style>
