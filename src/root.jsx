import { Outlet } from "react-router-dom";
import Navigation from "./components/navbar";

function Root() {
 return (
  <>
   <Navigation />
   <div id="detail">
    <Outlet />
   </div>
  </>
 );
}

export default Root;
