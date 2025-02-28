//Officials
import {createBrowserRouter, RouterProvider} from "react-router-dom"
//Layouts
import { AppLayout } from "./components/Layout/AppLayout"
import { CountryDetails } from "./components/Layout/countryDetails"

// Pages
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Country } from "./pages/Country"
import { Home } from "./pages/Home"
import { ErrorPage } from "./pages/ErrorPage"
//Styles
import "./App.css"

const router =createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path: "country",
        element:<Country/>
      },
      {
        path: "country/:id",//Dynamic Routing we have to compulsory give the : sign for making the dynamic routing
        element:<CountryDetails/>
      },
      {
        path: "contact",
        element:<Contact/>
      }
    ]
  }
  
])

const App = ()=>{
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App 