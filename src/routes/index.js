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
            title: 'Dashboard'
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


router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title';

    const isLoggedIn = store.getters.isLoggedIn;
    const userType = store.state.user.object;

    if (!isLoggedIn && to.meta.requiresAuth) {
        // If the user is not logged in and the route requires authentication
        next('/login');
    } else if (isLoggedIn && to.name === 'login') {
        // If the user is already logged in and tries to visit the login page
        next('/');
    } else if (isLoggedIn) {
        // Check for student access
        if (to.meta.requiredStudent && userType.groups[0] !== 6) {
            // If the user is not a student but tries to access a student-only route
            next('/admin'); // or redirect to an appropriate route
        } else if (to.meta.requiredAdmin && userType.groups[0] !== 5) {
            // If the user is not an admin but tries to access an admin-only route
            next('/student'); // or redirect to an appropriate route
        } else {
            next(); // The user type matches the route requirement
        }
    } else {
        next(); // Proceed for non-protected routes
    }
});
export default router;
