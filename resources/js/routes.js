import AllProduct from './components/product/AllProduct.vue';
import CreateProduct from './components/product/CreateProduct.vue';
import EditProduct from './components/product/EditProduct.vue';

export const routes = [
  {
    name: 'home',
    path: '/',
    component: AllProduct,
  },
  {
    name: 'create',
    path: '/create',
    component: CreateProduct,
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditProduct,
  },
];
