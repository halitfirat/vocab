import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import AddVocab from "../features/vocab/AddVocab";
import VocabList from "../features/vocab/VocabList/VocabList";
import Header from "../common/Header/Header";
import theme from "./theme";
import "./App.module.scss";

// const Header = () => <h1>Header</h1>;
// const Footer = () => <h1>Footer</h1>;

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
    <ThemeProvider theme={theme}>
      <Header />
      {routes}
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default App;
