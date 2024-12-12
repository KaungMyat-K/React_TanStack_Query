import { createBrowserRouter } from "react-router-dom"
import LogHomePage from "../pages/LogHomePage";
import DashBoardPage from "../pages/DashBoardPage";
import LayoutPage from "../pages/LayoutPage";
import PerformancePage from "../pages/PerformancePage";


const router = createBrowserRouter([
    {
        path:'/',
        element: <DashBoardPage/>
    },
    {
        path: "/home",
        element: <LayoutPage />, 
        children: [
            {
                index: true,
                element: <DashBoardPage />, 
            },
            {
                path: "performance",
                element: <PerformancePage />,
            },
            {
                path: "log",
                element: <LogHomePage />,
            },
        ],
    }
])

export default router;