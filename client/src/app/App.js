import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.module.scss";

import VocabNew from "../features/vocab/VocabNew";
import VocabList from "../features/vocab/VocabList/VocabList";

const Header = () => <h1>Header</h1>;
const Homepage = () => <h1>Homepage</h1>;
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
