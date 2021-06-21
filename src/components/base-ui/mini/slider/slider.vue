<template>
  <div class="slider" ref="myRef">
     <a class="cursor" @mousedown="mousedown" ></a>
  </div>
  <span>({{curValue+'/'+maxValue}})</span>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref, onMounted } from 'vue';

export default {

  name: 'slider',
  data() {
    return {

    };
  },
  components: {},
  props: ['curVal', 'maxVal'],
  setup(props) {
    const maxValue = ref(100);
    const curValue = ref(0);
    const myRef = ref(null);
    function mousedown(event) {
      const drag = event.target;
      const maxLength = drag.parentNode.offsetWidth - drag.offsetWidth;
      const diffX = event.clientX - event.target.offsetLeft;
      // console.log('点击游标');
      if (typeof event.target.setCapture !== 'undefined') {
        event.target.setCapture();
      }
      // eslint-disable-next-line no-shadow
      document.onmousemove = function onmousemove(event) {
        event = event || window.event;
        let moveX = event.clientX - diffX;
        if (moveX < 0) {
          moveX = 0;
        } else if (moveX > maxLength) {
          return;
        } else if (moveX > window.innerWidth - drag.offsetWidth) {
          moveX = window.innerWidth - drag.offsetWidth;
        }
        drag.style.left = `${moveX}px`;
        curValue.value = Math.trunc(maxValue.value * (moveX / maxLength));
      };
      // eslint-disable-next-line no-shadow
      document.onmouseup = function onmouseup(event) {
        this.onmousemove = null;
        this.onmouseup = null;
        // 修复低版本ie bug
        if (typeof event.target.releaseCapture !== 'undefined') {
          event.target.releaseCapture();
        }
      };
    }
    // 初始化游标的位置
    function initPosition() {
      const cursor = myRef.value.querySelector('.cursor');
      let curValueTemp = props.curVal;
      let maxValueTemp = props.maxVal;
      if (cursor && curValueTemp && maxValueTemp) {
        const maxLength = cursor.parentNode.offsetWidth - cursor.offsetWidth;
        curValueTemp = parseInt(curValueTemp, 10);
        maxValueTemp = parseInt(maxValueTemp, 10);
        maxValueTemp = maxValueTemp > curValueTemp ? maxValueTemp : curValueTemp;
        cursor.style.left = `${maxLength * (curValueTemp / maxValueTemp)}px`;
        curValue.value = curValueTemp;
        maxValue.value = maxValueTemp;
      }
    }
    function getCurValue() {
      return curValue;
    }
    onMounted(() => {
      initPosition();
      myRef.value.getCurValue = getCurValue;
    });

    return {
      myRef, mousedown, maxValue, curValue,
    };
  },
};
</script>

<style lang="scss" scoped>
  .slider{
    min-height: 1rem;
    min-width: 100px;
    background-color: turquoise;
    position: relative;
    margin: 10px 5px;
    .cursor{
      height: 1.2rem;
      width: 1.2rem;
      border-radius: 50%;
      background-color: #eee;
      top: -0.1rem;
      position: absolute;
      left:0;
    }
  }
</style>
