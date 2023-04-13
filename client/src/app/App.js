import React from "react";
import { useRoutes } from "react-router-dom";

import VocabNew from "../features/vocab/VocabNew";

const Header = () => <h1>Header</h1>;
const Homepage = () => <h1>Homepage</h1>;
const VocabList = () => <h1>VocabList</h1>;
const Footer = () => <h1>Footer</h1>;

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/vocabs",
      children: [
        {
          index: true,
          element: <VocabList />,
        },
        {
          path: "new",
          element: <VocabNew />,
        },
      ],
    },
  ]);

  return (
    <div>
      <Header />
      {routes}
      <Footer />
    </div>
  );
};

export default App;
