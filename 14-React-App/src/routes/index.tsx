import {createBrowserRouter, RouterProvider} from "react-router-dom";

import ProtectedRoutes from "./protected-routes";
import  Home from "@/pages";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import DetailBookPage from "@/pages/books/detail";
import ProfilePage from "@/pages/profile";
import EditProfile from "@/pages/profile/edit-profile";
import HistoryBorrow from "@/pages/profile/history-borrow";

export default function Router() {
    const router = createBrowserRouter([
        {
            element: <ProtectedRoutes />,
            children: [
                {path: "/", element: <Home/>},
                {path: "/logoin", element: <LoginPage />},
                {path: "/register", element: <RegisterPage />},
                {path: "/book/:id", element: <DetailBookPage />},
                {path: "/profile", element: <ProfilePage />},
                {path: "/edit-profile", element: <EditProfile />},
                {path: "/history-borrow", element: <HistoryBorrow />},
                {path: "*", element: <div>404 page not found</div>},

            ],
        },
        
    ]);
    return <RouterProvider router={router} />;
}