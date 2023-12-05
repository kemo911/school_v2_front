import LayoutComponent from "@/components/Dashboard/LayoutComponent.vue";
import StudentsComponent from "@/components/Dashboard/Students/StudentsComponent.vue";


const routes = [
    {
        path : '/',
        component: LayoutComponent,
        name: 'home',
        meta : {
            title: 'Dashboard'
        },
        children: [
            {
                path: 'student',
                component : StudentsComponent,
                name: 'Student',
                meta: {
                    title: 'Student'
                }
            },
            {
                path: 'Admin',
                component : StudentsComponent,
                name: 'admin',
                meta: {
                    title: 'Admin'
                }
            }
        ]
    }
]
export default routes