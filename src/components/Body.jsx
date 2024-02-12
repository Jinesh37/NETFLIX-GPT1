import Login from "../components/login";
import Browse from "../components/Browse";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {useDispatch} from "react-redux";
const Body=()=>{
    // const dispatch=useDispatch();
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

// we can use navigate outside the router.Right now routing is happening inside the body component.I can only navigate the children of router provider we can use inside the login or child of login or browse or child of browse