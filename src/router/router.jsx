import  React from "react";
import Root from "../pages/Root";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import ProfilePage from "../pages/ProfilePage";
import SinglePage from "../pages/SinglePage";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/catalog",
                element: <CatalogPage />
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            }, 
            {
                path: "/tovar/:id",
                element: <SinglePage />,
            }

        ]
    }
]);

export default router;