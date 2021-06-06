// 语言
import { createI18n } from 'vue-i18n';
import ch from './ch';
import en from './en';

const i18n = createI18n({
  locale: 'ch',
  messages: {
    ch,
    en,
  },
});
export default i18n; // 将i18n暴露出去，在main.js中引入挂载
