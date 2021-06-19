<template>
<div class="dragView">
  <div class="dragItemWrap">
    <dragContainer>
      <dragItem >1</dragItem>
      <dragItem >2</dragItem>
      <dragItem >3</dragItem>
      <dragItem >4</dragItem>
    </dragContainer>
  </div>
  <div class="dragContainerWrap">
      <dragContainer></dragContainer>
      <dragContainer></dragContainer>
      <dragContainer></dragContainer>
      <dragContainer></dragContainer>
    </div>
</div>
</template>

<script type="text/javascript">
// @ is an alias to /src
import dragItem from '@/components/base-ui/layout/drag/dragItem.vue';
import dragContainer from '@/components/base-ui/layout/drag/dragContainer.vue';

export default {
  name: 'dragView',
  data() {
    return {

    };
  },
  components: {
    dragItem, dragContainer,
  },
};
</script>

<style lang="scss"  scoped>
.dragView{
  display: flex;
  .dragItemWrap{
    display: flex;
    width: 150px;
    flex-wrap: wrap;
    .dragContainer{
      margin: 5px;
    }
    .dragItem{
      width: 100px;
      height: 100px;
      margin: 5px;
    }
  }
}
.dragContainerWrap{
  display: flex;
  width: 450px;
  flex-wrap: wrap;
  align-content: flex-start;
  .dragContainer{
    width: 200px;
    height: 200px;
    margin: 3px;
  }

}
  .dragItem{
    background-color: #eee;
    width: 200px;
    height: 200px;
  }

</style>
