import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Root from "../components/Root";
import Statistics from "../components/Statistics";

export const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
    errorElement: <ErrorPage />,
    children: [
        // { path: '/', element: <Home /> },
        // {
        //     path: '/quiz/:id',
        //     loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        //     element: <Quiz></Quiz>
        // },
        // { path: 'statistics', element: <Statistics /> },
        // { path: 'blog', element: <Blog></Blog> },
    ]
}])