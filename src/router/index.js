import Vue from "vue";
import Router from "vue-router";
import Product from "../views/Category/product";

Vue.use(Router);

export default new Router({  
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/**webpackChunkName:"home" */ "./../views/Home"),
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import(/**webpackChunkName:"detail" */ "../views/Home/details.vue")
    },
    {
      path: "/category",
      name: "category",
      redirect: "/category/product",
      linkActiveClass: "active",
      component: () => import(/**webpackChunkName:"category" */ "./../views/Category"),
      children: [
        {
          path: "product",
          component: Product
        },
        {
          path: "details",
          name: "details",
          redirect: "/category/details/product_jieshao",
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/Category/details"),
          children: [
            {
              path: "product_jieshao",
              name: "product_jieshao",
              component: () => import(/**webpackChunkName:"product_jieshao" */ "../views/Category/details/product_jieshao.vue")
            },
            {
              path: "product_qa",
              name: "product_qa",
              component: () => import(/**webpackChunkName:"product_qa" */ "../views/Category/details/product_qa.vue")
            },
            {
              path: "product_azxz",
              name: "product_azxz",
              component: () => import(/**webpackChunkName:"product_azxz" */ "../views/Category/details/product_azxz.vue")
            },
            {
              path: "product_req",
              name: "product_req",
              component: () => import(/**webpackChunkName:"product_req" */ "../views/Category/details/product_req.vue")
            },
          ]
        },
        {
          path: "comment",
          name: "comment",
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/Category/comment")
        }
      ]
    },
    {
      path: "/shopcart/:id",
      name: "shopcart",
      props: true,
      component: () => import(/**webpackChunkName:shopcart */ "./../views/ShopCart")
    },
    {
      path: "/my",
      name: "my",
      component: () => import(/**webpackChunkName:my */ "./../views/My")
    }
  ]
});
