import {BrowserRouter, Route, Routes} from "react-router-dom";
import { FC, Suspense } from "react"

const RouterStock = () =>(
    <BrowserRouter>
    <Suspense 
    fallback={<p>Carregando...</p>}>
    <Routes>{paths().map((path) => build(path))}</Routes>
    </Suspense>
    </BrowserRouter>
);

const build : FC<IRouteProps> = (route) =>{
    if(!route.children){
        return(
            <Route
            key={route.path}
            path={route.path}
            element={
                <RouteStock
                visibility={route.visibility}
                element={route.element}
                 />
            }
            >

            </Route>
        )
    }
}