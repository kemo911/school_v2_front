import StudentsComponent from "@/components/Dashboard/Students/StudentsComponent.vue";

const routes = [
    {
        path: 'student',
        component : StudentsComponent,
        name: 'student',
        meta: {
            title: 'Student',
            requiredAuth: true,
            requiredStudent: true
        }
    }
]

export default routes