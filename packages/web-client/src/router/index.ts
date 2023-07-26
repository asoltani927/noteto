import {createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized} from 'vue-router'
import {isCallback} from "../utils";
import { baseRoutes } from './base';

let routes: any[] = []

routes = routes.concat(baseRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const middlewarePipeline = (context: {
    to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext
}, middleware: [], index: number) => {
    const nextMiddleware: any = middleware[index]

    if (!nextMiddleware) {
        return context.next
    }

    return () => {
        const nextPipeline = middlewarePipeline(
            context, middleware, index + 1
        )
        if (isCallback(nextMiddleware)) {
            const params = context;
            params.next = nextPipeline
            return nextMiddleware(params)
        }
    }
}

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {

    /** Navigate to next if middleware is not applied */
    if (!to.meta.middleware || (Array.isArray(to.meta.middleware)  && to.meta.middleware.length === 0)) {
        return next()
    }

    const middleware: any = to.meta.middleware ?? [];
    const context = {
        to,
        from,
        next,
        //   store  | You can also pass store as an argument
    }

    // @ts-ignore
    if (isCallback(middleware[0])) {
        const params = context;
        params.next =  middlewarePipeline(context, middleware, 1)
        return middleware[0](params)
    }
})


export default router