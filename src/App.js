import react from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import './index.css'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';


const App = () =>{
    return (
        <>
            <Header />
            <Outlet />  {/* appRouter is render here, depending upon the url path */}
            <Footer />
        </>
    );  
}

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <App />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        },
      ],
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);  // for rendering react routers.