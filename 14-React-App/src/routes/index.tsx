import {createBrowserRouter, RouterProvider} from "react-router-dom";

import  HomePage from "@/pages";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import DetailBookPage from "@/pages/books/detail";
import ProfilePage from "@/pages/profile";
import EditProfilePage from "@/pages/profile/edit-profile";
import BooksPage from "@/pages/books";
import HistoryBorrowPage from "@/pages/profile/history-borrow";
import AdminPage from "@/pages/admin";

import ProtectedRoutes from "./protected-routes";

const App = () => {
    const router = createBrowserRouter([
        {
            element: <ProtectedRoutes />,
            children: [
                {path: "/", element: <HomePage/>},
                {path: "/login", element: <LoginPage />},
                {path: "/register", element: <RegisterPage />},
                {path: "/book/:id", element: <DetailBookPage />},
                {path: "/profile", element: <ProfilePage />},
                {path: "/books", element: <BooksPage />},
                {path: "/edit-profile", element: <EditProfilePage />},
                {path: "/history-borrow", element: <HistoryBorrowPage/>},
                {path: "/dashboard", element: <AdminPage />},
                {path: "*", element: <div>404 page not found</div>
            },

            ],
        },
        
    ]);
    return <RouterProvider router={router} />;
}

export default App;