import { createBrowserRouter } from "react-router-dom"
import TablePage from "../pages/TablePage"
import ClientSelectorPage from "../pages/ClientSelectorPage";
import DashBoardPage from "../pages/DashBoardPage";


const router = createBrowserRouter([
    {
        path:'/',
        element: <DashBoardPage/>
    },
    {
        path:'/client',
        element: <ClientSelectorPage/>
    },
    {
        path:'/table/:client',
        element: <TablePage/>
    }
    ])

export default router;