// ############################domTool################################
function hasClass(obj, cls) {
  return obj.className.match(new RegExp(`(\\s|^)${cls}(\\s|$)`));
}
function addClass(obj, cls) {
  cls = cls.split(' ');
  for (const clss of cls) {
    if (!domTool.hasClass(obj, clss)) {
      obj.className = `${obj.className.trim()} ${clss}`;
    }
  }
}
function removeClass(obj, cls) {
  cls = cls.split(' ');
  for (const clss of cls) {
    const reg = new RegExp(`(\\s|^)${clss}(\\s|$)`);
    if (domTool.hasClass(obj, clss)) {
      obj.className = obj.className.replace(reg, ' ');
    }
  }
}
function replaceClass(obj, cls, newCls) {
  const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`);
  if (domTool.hasClass(obj, cls)) {
    obj.className = obj.className.replace(reg, newCls);
  }
}
function removeClassForList(list, cls) {
  for (let i = 0; i < list.length; i++) {
    const obj = list[i];
    domTool.removeClass(obj, cls);
  }
}
function addClassForList(list, cls) {
  for (let i = 0; i < list.length; i++) {
    const obj = list[i];
    domTool.addClass(obj, cls);
  }
}
function toggleClass(obj, cls) {
  if (domTool.hasClass(obj, cls)) {
    domTool.removeClass(obj, cls);
  } else {
    domTool.addClass(obj, cls);
  }
}

// ############################commonTool################################
/*
* fn [function] 需要防抖的函数
* delay [number] 毫秒，防抖期限值
*/
function debounce(fn, delay) {
  let timer = null;
  return function tf() {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    } else {
      timer = setTimeout(fn, delay);
    }
  };
}
/*
* fn [function] 需要节流的函数
* delay [number] 毫秒，节流期限值
*/
function throttle(fn, delay) {
  let valid = true;
  return function tf() {
    if (!valid) {
      return;
    }
    valid = false;
    fn();
    setTimeout(() => {
      valid = true;
    }, delay);
  };
}
/**
 * 节流（立即执行）
 * @param {*} fn
 * @param {*} delay
 * @param  {...any} para
 * @returns
 */
function throttleIns(fn, delay, ...para) {
  // eslint-disable-next-line no-unused-expressions
  fn.valid === undefined ? fn.valid = true : '';
  if (!fn.valid) {
    return;
  }
  fn.valid = false;
  fn(...para);
  setTimeout(() => {
    fn.valid = true;
  }, delay);
}
function getObjByKey(list, keyName, keyVal) {
  for (let i = 0; i < list.length; i++) {
    if (list[i][keyName] === keyVal) {
      return list[i];
    }
  }
  return null;
}
// 用于生成uuid
function S4() {
  // eslint-disable-next-line no-bitwise
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function guid() {
  return (`${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`);
}
// ############################arrayTool################################
function getValByKey(list, keyName, valName, key) {
  if (!list || list.length === 0) {
    return null;
  }
  const res = list.find((item) => item[keyName] === key);
  return res ? res[valName] : null;
}

// ############################--------################################
const domTool = {
  hasClass, addClass, removeClass, removeClassForList, addClassForList, toggleClass, replaceClass,
};
const commonTool = {
  debounce, throttle, throttleIns, getObjByKey, guid,
};
const arrayTool = {
  getValByKey,
};

// eslint-disable-next-line import/prefer-default-export
export { domTool, commonTool, arrayTool };
