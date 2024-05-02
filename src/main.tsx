import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {RouterProvider} from "react-router-dom";
import routesConfig from "./routes/routesConfig.tsx";
import './18n.js'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
       <RouterProvider router={routesConfig}/>
    </Suspense>
  </React.StrictMode>,
)
