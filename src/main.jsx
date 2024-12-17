
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home.jsx';
import ListedBook from './ListedBook.jsx';
import PagesRead from './PagesRead.jsx';
import ReadBook from './ReadBook.jsx';
import WishList from './WishList.jsx';
import Details from './Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch('/BookData.json'),
    element: <Root></Root>,
    children:[
      {
        path: "/",
        loader: () => fetch('/BookData.json'),
        element: <Home key={'home'}></Home>
      },
      {
        path: "/listedbook",
        element: <ListedBook></ListedBook>,
        children:[
          {
            path: "/listedbook/readbook",
            loader: () => fetch('/BookData.json'),
            element: <ReadBook></ReadBook>
          },
          {
            path:"/listedbook/wishlist",
            loader: () =>fetch('/BookData.json'),
            element:<WishList></WishList>
          }

        ]
      },
      {
        path:"/pagesread",
        loader: () =>fetch('/BookData.json'),
        element:<PagesRead></PagesRead>
      },
      {
        path:"/details", 
        element:<Details></Details>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
