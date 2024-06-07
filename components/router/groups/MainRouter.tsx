import {MainLayout} from '@/components/layout/MainLayout';
import { IRouteProps } from "@/app/utils/types/route";
import {Login} from "@/app/pages/Auth/login";
import {Register} from "@/app/pages/Auth/register";
import { Dashboard } from "@/app/pages/Dashboard";

export const MainRoutes : IRouteProps = {
    path: "/auth",
    element:MainLayout,
    visibility:"public",
    children:[
        {
            path:"/",
            element:Dashboard,
            visibility:"public",
        },
        {
            path:"*",
            element: NotFound,
            visibility:"public",
        },
    ]

} 