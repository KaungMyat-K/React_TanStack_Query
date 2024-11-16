import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import TablePage from "../pages/TablePage"


const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:'/table/:client',
        element: <TablePage/>
    }
])

export default router;