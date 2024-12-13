import { createBrowserRouter } from "react-router-dom"
import LogHomePage from "../pages/LogHomePage";
import DashBoardPage from "../pages/DashBoardPage";
import LayoutPage from "../pages/LayoutPage";
import PerformancePage from "../pages/PerformancePage";
import PerformanceDetailsPage from "../pages/PerformanceDetailsPage";
import LogInPage from "../pages/LogInPage";


const router = createBrowserRouter([
    {
        path:'/',
        element: <LogInPage/>
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
            },{
                path: "performanceDetails",
                element: <PerformanceDetailsPage />,
            },
        ],
    }
])

export default router;