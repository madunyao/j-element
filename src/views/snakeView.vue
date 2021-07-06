<template>
  <div class="snakeView">
    <div class="tip-word" >单击【空格】开始/暂停游戏：</div>
    <canvas id="snake" width="300" height="300"></canvas>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref, onMounted } from 'vue';
import Snake from '../components/game/snake';

export default {
  name: 'myvue',
  data() {
    return {

    };
  },
  components: {
  },
  setup() {
    const myRef = ref(null);
    onMounted(() => {
      const snake = new Snake('snake');
      snake.init();
    });
    return {
      myRef,
    };
  },
};
</script>

<style  scoped>
#snake{
  border: 1px solid #eee;
}
.snakeView{
  display: flex;
  padding: 50px;
  position: relative;
}
.tip-word{
  position:absolute;
  top:1rem;
  font-size: 1rem;
}
</style>
