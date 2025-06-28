import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
        {
        path: "/",
        Component: Home,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails></ProjectDetails>,
      }
    ]
  },
]);

export default router;