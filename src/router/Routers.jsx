import Home from "../pages/index"
import About from "../pages/About"
import Blog from "../pages/blogs"
import Post from "../pages/blogs/_id"
import RootLayout from "../layouts/RootLayouts"
import { createBrowserRouter } from "react-router-dom";

import { posts, postById } from "../apis/loaders"
import ErrorPage from "../components/ErrorPage"

export const router = createBrowserRouter([
    {
        path : "/",
        element : <RootLayout />,
        errorElement : <ErrorPage />,
        children : [
            {
                path : '/',
                element : <Home/>,
            },
            {
                path : '/blog',
                element : <Blog/>,
                loader : posts,
            },
            {
                path : '/blog/:id',
                element : <Post/>,
                loader : postById,
            },
            {
                path : '/about',
                element : <About />,
            },
        ],
    },
])