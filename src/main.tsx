import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@/lib/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={createBrowserRouter(routes)} />,
);
