import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import RestaurantMenu from "./components/RestaurantMenu"; // Assuming you meant to use this for the dynamic route
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

// Layout component with header and outlet for nested routes
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

// Create router with nested routes and error boundary
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "",
                element: <Body />, // Default route for "/"
            },
            {
                path: "body",
                element: <Body />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "restaurants/:id", // Correct dynamic route path
                element: <RestaurantMenu />, // Use the correct component for the dynamic route
            },
        ],
        errorElement: <Error />,
    },
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
);
