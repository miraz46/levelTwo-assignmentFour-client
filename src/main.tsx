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
import SingleBook from './Components/Pages/SingleBook';
import { Provider } from 'react-redux';
import New from './Components/New';
import { store } from './redux/store';




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
        Component: SingleBook,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: "/edit-book/:id",
        Component: EditBook,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: "/borrow/:bookId",
        Component: BorrowBook,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: "/practice",
        Component: New,
        loader: () => fetch('/fakeData.json')
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
