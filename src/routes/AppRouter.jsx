import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layouts/LoginForm'
import RegisterForm from '../layouts/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import NewTodoForm from '../layout/NewTodoForm'
import HOME from '../layouts/Home'
import Information from '../layouts/Information'
import Reserved from '../layouts/Reserve'
import AdminReserved from '../layouts/AdminReserve'

// import Reservatiolist from '../layouts/Reservationlist'


const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />},
      { path: '/login', element: <LoginForm />},
      { path: '/home', element: <HOME />},
      { path: '/Information', element: <Information/>},
      { path: '/reserve', element: <Reserved/>},
      // { path: '/Reservation list', element: <Reservatiolist />},
      
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <UserHome /> },
      { path: '/new/*', element: <NewTodoForm />},
      { path: '/login', element: <LoginForm />},
      { path: '/home', element: <HOME />},
      { path: '/Information', element: <Information/>},
      { path: '/reserve', element: <Reserved/>},

    ]
  }
])

const AdminRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <UserHome /> },
      { path: '/new/*', element: <NewTodoForm />},
      { path: '/login', element: <LoginForm />},
      { path: '/home', element: <HOME />},
      { path: '/Information', element: <Information/>},
      { path: '/reserve', element: <AdminReserved/>},

    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  // const finalRouter = user?.id ? userRouter : guestRouter
  const finalRouter = user?.id ? (user.role === 'ADMIN' ? AdminRouter : userRouter) : guestRouter
  return (
    <RouterProvider router={finalRouter} />
  )
}
