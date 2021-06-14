import About from '../views/About.vue';
import ModalView from '../views/modalView.vue';
import BannerView from '../views/bannerView.vue';
import TabDivView from '../views/tabDivView.vue';
import NavView from '../views/navView.vue';

const homeRouter = [
  {
    path: '/about',
    name: 'About',
    component: About,
  }, {
    path: '/modalView',
    name: 'ModalView',
    component: ModalView,
  }, {
    path: '/bannerView',
    name: 'bannerView',
    component: BannerView,
  }, {
    path: '/tabDivView',
    name: 'tabDivView',
    component: TabDivView,
  }, {
    path: '/navView',
    name: 'navView',
    component: NavView,
  },
];

export default homeRouter;
