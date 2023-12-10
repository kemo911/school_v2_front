import * as VueRouter from 'vue-router';
import authRoutes from './auth';
import studentRoutes from './studentRoutes'
import adminRoutes from './adminRoutes'
import store from "@/store/store";
import LayoutComponent from "@/components/Dashboard/LayoutComponent.vue";

const routes = [
    {
        path : '/',
        component: LayoutComponent,
        name: 'home',
        meta : {
            title: 'Dashboard',
            requiredAuth: true
        },
        children: [
            ...studentRoutes,
            ...adminRoutes
        ]
    },
    ...authRoutes,
];

const router = VueRouter.createRouter({
    history : VueRouter.createWebHistory(),
    routes
});

function requiresMetaField(route, field) {
    if (route.meta && route.meta[field]) {
        return true;
    }
    if (route.children) {
        return route.children.some(childRoute => requiresMetaField(childRoute, field));
    }
    return false;
}



router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title';

    const isLoggedIn = store.getters.isLoggedIn;
    const userType = store.state.user.object;

    const authRequired = requiresMetaField(to, 'requiredAuth');
    const studentAccessRequired = requiresMetaField(to, 'requiredStudent');
    const adminAccessRequired = requiresMetaField(to, 'requiredAdmin');


    if (!isLoggedIn && authRequired) {
        next('/login');
    } else if (isLoggedIn && to.name === 'login') {
        next('/');
    } else if (isLoggedIn) {
        if (studentAccessRequired && userType.groups[0] !== 6) {
            next('/admin');
        } else if (adminAccessRequired && userType.groups[0] !== 5) {
            next('/student');
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;
