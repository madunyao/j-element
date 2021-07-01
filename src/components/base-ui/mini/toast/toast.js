import { commonTool } from '@/assets/js/utils';

const Toast = (function Toast() {
  function base(text, type) {
    if (document) {
      const uuid = commonTool.guid();
      const div = document.createElement('div');
      div.id = uuid;
      div.setAttribute('class', `toast ${type}`);
      div.innerHTML = `<p>${text}</p>`;
      const body = document.getElementsByTagName('body');
      body[0].appendChild(div);
      setTimeout(() => {
        div.setAttribute('class', `toast ${type} hide`);
      }, 1500);
      setTimeout(() => {
        div.parentNode.removeChild(div);
        // div.remove();
      }, 3500);
    }
  }
  function toast(text) {
    base(text, 'green');
  }
  function warn(text) {
    base(text, 'yellow');
  }
  function error(text) {
    base(text, 'red');
  }
  return {
    toast,
    warn,
    error,
  };
}());
export { Toast };
export default Toast;
