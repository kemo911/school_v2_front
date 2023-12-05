import AdminComponent from "@/components/Dashboard/Admin/AdminComponent.vue";

const routes = [
    {
        path: 'admin',
        component : AdminComponent,
        name: 'admin',
        meta: {
            title: 'Admin',
            requiredAuth: true,
            requiredAdmin: true
        }
    }
]

export default routes