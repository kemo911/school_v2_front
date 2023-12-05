import LoginForm from "@/components/Auth/LoginForm.vue";
import SignupForm from "@/components/Auth/SignupForm.vue";



const routes = [
    {
        path : '/login',
        component: LoginForm,
        name: 'login',
        meta: {
            title : 'Login'
        }
    },
    {
        path: '/signup',
        component: SignupForm,
        name: 'signup',
        meta: {
            title: 'Signup'
        }
    }
]
export default routes