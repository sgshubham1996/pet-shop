import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import Management from './pages/management/Management';
import Service from './pages/service/Service';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Login from './pages/login/Login';

function Layout(){
  return(
     <div className='main' >
      <Navbar />
     
      <div className='container' >
       <div className='menuContainer' >
        <Menu />
       </div>
       <div className='contentContainer' >
        <Outlet />
       </div>
      </div>
      <Footer />
     </div>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/management',
          element:<Management />
        },
        {
          path:'/service',
          element:<Service />
        }
      ]
    },
    {
      path:"/login",
      element:<Login />
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
