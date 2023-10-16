import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
import Spinner from "../../components/Spinner/Spinner";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
const Error = lazy(() => import('../../pages/Error/Error'));
const ViewCoffee = lazy(() => import('../../pages/ViewCoffee/ViewCoffee'));
const AddCoffee = lazy(() => import("../../pages/AddCoffee/AddCoffee"));
const EditCoffee = lazy(() => import("../../pages/EditCoffee/EditCoffee"));
const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../../pages/SignUp/SignUp"));
const AllUsers = lazy(() => import("../../pages/AllUsers/AllUsers"));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Suspense fallback={<Spinner />}><Error /></Suspense>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => await fetch("https://coffee-shope-server-md-raint-rubbyat-sultan.vercel.app/coffees")
            },
            {
                path: '/add-coffee',
                element: <Suspense fallback={<Spinner />}><PrivetRoute><AddCoffee /></PrivetRoute></Suspense>
            },
            {
                path: '/view-coffee/:id',
                element: <Suspense fallback={<Spinner />}><PrivetRoute><ViewCoffee /></PrivetRoute></Suspense>,
                loader: async ({ params }) => await fetch(`https://coffee-shope-server-md-raint-rubbyat-sultan.vercel.app/coffees/${params.id}`)
            },
            {
                path: '/edit-coffee/:id',
                element: <Suspense fallback={<Spinner />}><PrivetRoute><EditCoffee /></PrivetRoute></Suspense>,
                loader: async ({ params }) => await fetch(`https://coffee-shope-server-md-raint-rubbyat-sultan.vercel.app/coffees/${params.id}`)
            },
            {
                path: '/allusers',
                element: <Suspense fallback={<Spinner />}><PrivetRoute><AllUsers /></PrivetRoute></Suspense>,
                loader: async () => await fetch("https://coffee-shope-server-md-raint-rubbyat-sultan.vercel.app/user")
            },
            {
                path: '/signin',
                element: <Suspense fallback={<Spinner />}><SignIn /></Suspense>,
            },
            {
                path: '/signup',
                element: <Suspense fallback={<Spinner />}><SignUp /></Suspense>,
            },
        ]
    }
])