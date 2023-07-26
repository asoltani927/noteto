import {RouteLocationNormalized} from "vue-router";

export const isGuestMiddleware = async (context: {to: RouteLocationNormalized, from: RouteLocationNormalized, next: any} ) => {
    return context.next()
}
export default isGuestMiddleware