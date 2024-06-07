import {AuthLayout} from "@/components/layout/AuthLayout";
import { IRouteProps } from "@/app/utils/types/route";
import {Login} from "@/app/pages/Auth/login";
import {Register} from "@/app/pages/Auth/register";

export const AuthRoutes : IRouteProps = {
    path: "/auth",
    element:AuthLayout,
    visibility:"auth",
    children:[
        {
            path:"/auth/login",
            element:Login,
            visibility:"auth",
        },
        {
            path:"/auth/register",
            element: Register,
            visibility:"auth",
        },
    ]

} 