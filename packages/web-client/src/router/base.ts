import HomePageVue from '@noteto/web-client/views/HomePage.vue'
import DefaultLayout from '@noteto/web-client/layouts/DefaultLayout.vue';
import isGuestMiddleware from '@noteto/web-client/middleware/is-guest.middleware.ts'
export const baseRoutes = [
    {
        path: '/',
        name: 'Home',
        component: HomePageVue,
        meta: {
            layout: DefaultLayout,
            middleware: [isGuestMiddleware],
            title: "پیشخوان"
        }
    },
]
