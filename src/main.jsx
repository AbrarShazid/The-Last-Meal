import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
 
} from "react-router";
import Category from './Components/Category/Category.jsx';
import Home from './Components/Home-Page/Home.jsx';
import Details from './Components/DetailsRecipie/Details.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
        {
           index: true, 
           element: <Home  />
        },
        {
          path:"/recipeCategory",
          loader:()=>fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),

          Component:Category
        },

        {

          path:"/recipeCategory/:name",
          

          loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`),
        
          
          Component:Details

        }


        

    ]
    
  },

  {
    path:'*',
    element: <div className='flex flex-col justify-center items-center gap-5 mt-[20%]'>
      <h1 className='text-4xl'>404! Nothing is here</h1>
      <Link to={'/'} className='btn' >Go Back Home </Link>
      
    </div>
  }

]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  
  </StrictMode>,
)
