import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ListedHome from './components/ListedHome/ListedHome';
import WishList from './components/WishList/WishList';
import PagesToRead from './components/PagesToRead/PagesToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/book/:cardId",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/books.json')
      },
      {
        path:'/listed-books',
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            path: "/listed-books",
            element: <ListedHome></ListedHome>,
            loader: ()=> fetch('/books.json')
          },
          {
            path:"/listed-books/wishlist",
            element: <WishList></WishList>,
            loader: ()=>fetch('/books.json')
          }
        ]
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>,
        loader: ()=>fetch('/books.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
