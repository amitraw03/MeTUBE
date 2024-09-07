import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import Header from "./components/Header"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {
   const appRouter = createBrowserRouter([{
      path:'/',
      element: <Body/>,
      children:[  // to utilise this dynamic changing webpage ** USE outlet
         {
           path:'/',
           element: <MainContainer/>
         },
         {
           path:'watch',
           element:<WatchPage/>
         },
      ],
   },
  ]);

  return (
    <>
     <Header/>
     <Provider store={appStore}><RouterProvider router={appRouter}/></Provider>
    </>
  )
}

export default App
