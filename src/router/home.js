import About from '../views/About.vue';
import ModalView from '../views/modalView.vue';

const homeRouter = [
  {
    path: '/about',
    name: 'About',
    component: About,
  }, {
    path: '/modalView',
    name: 'ModalView',
    component: ModalView,
  },
];

export default homeRouter;
