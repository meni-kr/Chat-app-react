import { Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Auth } from "./pages/auth/Auth";
import {routes} from "./routes"


export function RootCmp(){

  return(<>
  <Routes>
    {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
  </Routes>
  
  </>)
}