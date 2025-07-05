import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root';
import AllBook from './Components/Pages/AllBook';
import BorrowSummary from './Components/Pages/BorrowSummary';
import ErrorPage from './Components/ErrorPage';
import EditBook from './Components/EditBook';
import { ToastContainer } from 'react-toastify';
import BorrowBook from './Components/BorrowBook';
import AddBook from './Components/Pages/AddBook';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SingleBook from './Components/SingleBook';




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: AllBook
      },
      {
        path: "/books",
        Component: AllBook
      },
      {
        path: "/create-book",
        Component: AddBook
      },
      {
        path: "/books/:id",
        Component: SingleBook
      },
      {
        path: "/edit-book/:id",
        Component: EditBook
      },
      {
        path: "/borrow/:bookId",
        Component: BorrowBook
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
        
      },
    ]
  },
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </StrictMode>,
)
