import Login from "../components/login";
import Browse from "../components/Browse";
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const Body=()=>{
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },{
            path:"/browse",
            element:<Browse/>
        }
    ]);
    return (
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    )
}
export default Body;