/**
 * 表单校验工具类
 * @version 1.0
 * @type {{initValidate, validate}}
 */
const FormUtils = (function () {
  const domTypeDefine = {
    TEXT: { must: 'value' },
  };
  const alertClass = 'form-row-alert';
  const alertStrTemplate = "<div class='form-row-alert'>***</div>";
  /**
   * 设置提示语相关函数
   * @param el
   * @param show
   * @param text
   */
  const setAlertHelper = function (el, show, text) {
    let alertNode = el.parentNode.querySelector(`.${alertClass}`);
    if (show) {
      if (alertNode) {
        // 如果提示语存在，提示语内容有改变，则替换
        if (text !== alertNode.innerHTML) {
          alertNode.innerHTML = text;
        }
      } else {
        // 如果提示语不存在，则添加提示语
        alertNode = createNode(alertStrTemplate.replace('***', text));
        el.parentNode.appendChild(alertNode);
      }
    } else if (alertNode) {
      // 删除提示语
      alertNode.parentNode.removeChild(alertNode);
    }
  };
  const setAlert = function (el, text) {
    setAlertHelper(el, true, text);
  };
  const clearAlert = function (el) {
    setAlertHelper(el, false);
  };
  function createNode(htmlStr) {
    const div = document.createElement('div');
    div.innerHTML = htmlStr;
    return div.childNodes[0];
  }

  /**
   * 为类Input型的元素设置监听事件
   * @param el
   * @param event
   */
  const setEventForInputType = function (el, event) {
    // 设置change事件
    // el.onchange=event;
    // 设置失去焦点事件
    el.onblur = event;
    // 设置输入事件
    el.oninput = event;
    // 自定义的默认触发事件
    // el.myValideEvent=event;
  };

  /**
   * 创建校验必填事件
   * @param el
   * @param validateObj
   * @returns {*}
   */
  function mustEventFactory(el, validateObj) {
    const typeOpt = domTypeDefine[getDomType(el)];
    let res = null;
    if (typeOpt) {
      res = function (event) {
        // eslint-disable-next-line no-shadow
        const el = event ? event.target : this;
        if (!el[typeOpt.must]) {
          setAlert(el, '该项为必填项！');
          return false;
        }
        if (validateObj.max) {
          if (el[typeOpt.must].length > validateObj.max) {
            setAlert(el, `超出最大字数${validateObj.max}!`);
            return false;
          }
        }
        if (validateObj.min) {
          if (el[typeOpt.must].length < validateObj.min) {
            setAlert(el, `少于最小字数${validateObj.min}!`);
            return false;
          }
        }

        clearAlert(el);
        return true;
      };
    }
    return res;
  }

  /**
   * 获取dom类簇
   * @param el
   * @returns {*}
   */
  function getDomType(el) {
    if ((el.nodeName === 'INPUT' && 'text;password;number'.indexOf(el.type) >= 0)
          || el.nodeName === 'SELECT' || el.nodeName === 'TEXTAREA') {
      return 'TEXT';
    }
    return null;
  }

  /**
   * 校验必填项初始化（&解析校验规则）
   * @param el
   */
  const initValidate = function (el) {
    // console.log("进入initValidate函数!");
    const formDom = document.getElementById(el);
    const rowList = formDom.querySelectorAll('*[valide]');
    for (let i = 0; i < rowList.length; i++) {
      setEvent(rowList[i]);
    }
    // console.log(formDom);
  };

  /**
   * 设置监听事件
   * @param el
   */
  function setEvent(el) {
    const type = getDomType(el);
    if (type) {
      const validateObj = jsonparse(el.getAttribute('valide'));
      if (validateObj && validateObj.must) {
        const mustEvent = mustEventFactory(el, validateObj);
        setEventForInputType(el, mustEvent);
      }
      // console.log(validateObj);
    }
  }
  function jsonparse(str) {
    return JSON.parse(str);
  }

  /**
   * 校验必填项
   * @param el
   */
  const validate = function (el) {
    // console.log("进入validate函数!");
    const formDom = document.getElementById(el);
    const rowList = formDom.querySelectorAll('*[valide]');
    let res = true;
    for (let i = 0; i < rowList.length; i++) {
      if (rowList[i].onblur) {
        if (!rowList[i].onblur()) {
          res = false;
        }
      }
    }
    return res;
    // console.log(formDom);
  };

  /**
   * 暴露的接口
   */
  return {
    initValidate,
    validate,
  };
}());

export default FormUtils;
