import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.module.scss";

import AddVocab from "../features/vocab/AddVocab";
import VocabList from "../features/vocab/VocabList/VocabList";

const Header = () => <h1>Header</h1>;
const Footer = () => <h1>Footer</h1>;

const App = () => {
  const routes = useRoutes([
    {
      path: "/vocabs",
      children: [
        {
          index: true,
          element: <VocabList />,
        },
        {
          path: "new",
          element: <AddVocab />,
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
