<template>
  <div class="formView" style="background-color:#ededed;height:100%">
    <div class="formTest">
      <div class="row no-margin">
        <h2 style="padding:20px 0">单列表单验证DEMO：</h2>
      </div>
      <div class="row no-margin"
         style="width: 50%;;margin: 0 auto;background-color: #fff;padding: 20px">
        <form id="myForm" class="easyForm">
            <div class="row no-margin">
                <div class="row-content">
                    <p class="form-title">用户注册</p>
                </div>
            </div>
            <div class="row no-margin">
                <div class="row-title">用户名：</div>
                <div class="row-content">
                    <input name="username" type="text" valide='{"must":true,"max":10}'
                           class="form-control" ng-model="user.username">
                </div>
            </div>
            <div class="row no-margin">
                <div class="row-title">密码：</div>
                <div class="row-content">
                    <input name="username" type="password" valide='{"must":true,"max":20,"min":6}'
                           class="form-control" ng-model="user.password">
                </div>
            </div>
            <div class="row no-margin">
                <div class="row-title">性别：</div>
                <div class="row-content">
                    <select name="usersex" valide='{"must":true}'
                            class="form-control"  ng-model="user.usersex">
                        <option value=""></option>
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </div>
            </div>
            <div class="row no-margin">
                <div class="row-title">用户简介：</div>
                <div class="row-content">
                    <textarea name="userdes"  valide='{"must":true,"max":50}'
                              rows="5" ng-model="user.userdes" class="form-control"></textarea>
                </div>
            </div>
            <div class="row no-margin btns-wrap">
                <button type="submit" class="btn j-green-h"
                        @click.prevent.self="submitMyForm()">保存</button>
                <button type="button" class="btn j-white-h" >取消</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
// @ is an alias to /src
import FormUtils from '@/components/base-rule/FormUtils';
import { ref, onMounted } from 'vue';

export default {
  name: 'myvue',
  data() {
    return {

    };
  },
  components: {},
  setup() {
    const user = ref({});
    onMounted(() => {
      FormUtils.initValidate('myForm');
    });
    function submitMyForm() {
      console.log('进入 submitMyForm 函数！');

      if (FormUtils.validate('myForm')) {
        console.log('校验通过！');
        console.log('正在提交数据到后台......');
      } else {
        console.error('校验失败！');
      }
    }
    return {
      user, submitMyForm,
    };
  },
};
</script>

<style  >
/** 表单校验CSS样式 ****************************************************/
.easyForm .btns-wrap{
  display: flex;
  justify-content: center;
}
.easyForm .btns-wrap button{
  margin: 5px 10px;
}
.easyForm .form-title{
  font-weight: bolder;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
}
.easyForm .form-row-alert{
  color: red;
  font-size: 12px;
  padding: 4px;
  width: 100%;
}
.easyForm .row{
  align-items: flex-start;
  font-size: 1rem;
}
.easyForm .row.no-margin{
  width: 100%;
  margin: 10px 0;
  display: flex;
}
.easyForm .row .row-title{
  width: 25%;
  min-width: 80px;
  text-align: right;
}
.easyForm .row .row-content{
  flex-grow:1;
}
.easyForm textarea{
  resize: none;
}
.easyForm .form-control{
  width: 100%;
  font-size: 1rem;
  padding: 5px;
}
.easyForm input.form-control{
 height: 1.5rem;
 line-height: 1.5rem;
 border: 1px solid #eee;
}
/** 表单校验CSS样式 ****************************************************/
</style>
