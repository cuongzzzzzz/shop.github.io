import * as React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout";
import routers from "./routers";

function App() {
  const Layout = DefaultLayout;
  const router = createBrowserRouter(
    routers.map((router) => {
      const Ele = router.element;
      return {
        path: router.path,
        element: (
          <Layout>
            <Ele />
          </Layout>
        ),
      };
    })
  );
  return <RouterProvider router={router} />;
}

export default App;
