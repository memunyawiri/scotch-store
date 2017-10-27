import Vue from 'vue';
import Router from 'vue-router';
// pages
import Home from '@/pages/Home';
import Admin from '@/pages/Admin';
import Cart from '@/pages/Cart';

// Admin Components
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/admin',
      name: 'Admin',

      // Parent routes still has a component
      component: Admin,

      // Child routes
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: 'products',
          name: 'Products',
          component: Products,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
  ],
});
