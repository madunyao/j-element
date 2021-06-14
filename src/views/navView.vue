<template>
  <div class="navView">
    <navDiv>
      <navSub name="A">
        <navItem>A1</navItem>
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

export default {
  name: 'navView',
  data() {
    return {

    };
  },
  components: {
    navDiv, navSub, navItem,
  },
};
</script>

<style  scoped>
.navView{
  padding: 10px;
}
</style>
