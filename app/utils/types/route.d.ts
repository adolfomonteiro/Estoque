import { FC } from "react";

type IRouteProps = {
    path :  string;
    element : FC;
    visibility : "public" | "private" | "auth";
    children?:IRouteProps[];
};

type IRouteStockProps = {
    visibility : "public" | "private" | "auth";
    element: FC
}