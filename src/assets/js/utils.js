function hasClass(obj, cls) {
  return obj.className.match(new RegExp(`(\\s|^)${cls}(\\s|$)`));
}
function addClass(obj, cls) {
  if (!domTool.hasClass(obj, cls)) obj.className += ` ${cls}`;
}
function removeClass(obj, cls) {
  if (hasClass(obj, cls)) {
    const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`);
    obj.className = obj.className.replace(reg, ' ');
  }
}
function removeClassForList(list, cls) {
  for (let i = 0; i < list.length; i++) {
    const obj = list[i];
    domTool.removeClass(obj, cls);
  }
}
function toggleClass(obj, cls) {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls);
  } else {
    addClass(obj, cls);
  }
}

const domTool = {
  hasClass, addClass, removeClass, removeClassForList, toggleClass,
};

// eslint-disable-next-line import/prefer-default-export
export { domTool };
