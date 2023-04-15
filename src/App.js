import Body from "./Container/Body";
import store from "./utils/store";
import Error404 from './Component/Error404';
import Watch from './Component/Watch';
import MainContent from "./Container/MainContainer/MainContent";

import {Provider} from 'react-redux';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContent/>
      },
      {
        path:"/watch",
        element:<Watch/>
      }
    ],
    errorElement:<Error404/>
  }
]);


function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
