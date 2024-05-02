import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import {Home} from '@/src/common/Home/Home'
import {NotFoundPage} from "../components/NotFoundPage/NotFoundPage.tsx";
import {ParsingsList} from "@/src/components/ParsingsList/ParsingsList.tsx";
import { BrifParsers } from '../components/shared/BrifParsers/BrifParsers.tsx';
import Services from '../components/ServicesPage/Services.tsx';
import Seo from "../components/SEO/Seo.tsx"
import Business from "../components/Business/Business.tsx"
import Marketers from "../components/Marketers/Marketers.tsx"
import OnlineStores from "../components/OnlineStores/OnlineStores.tsx"
const routeConfig = createBrowserRouter([
	{
        path: '/',
        element: <App/>,
        errorElement: <NotFoundPage/>,
        children:[
          { 
            path: '/',
            element: <Home/>,
            errorElement: <NotFoundPage/>
          },
          { 
            path: '/parsings-list',
            element: <ParsingsList/>,
            errorElement: <NotFoundPage/>
          },
          {
            path: '/fill-brif',
            element: <BrifParsers/>},
            {
            path: '/services',
            element: <Services/>,
            errorElement: <NotFoundPage/>
          },
          { 
            path: '/seo',
            element: <Seo/>,
            errorElement: <NotFoundPage/>
          },
          { 
            path: '/business',
            element: <Business/>,
            errorElement: <NotFoundPage/>
          },
          { 
            path: '/marketers',
            element: <Marketers/>,
            errorElement: <NotFoundPage/>
          },
          { 
            path: '/onlinestores',
            element: <OnlineStores/>,
            errorElement: <NotFoundPage/>
          }
        ]
	}
])
export default routeConfig
