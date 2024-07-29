import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import AddVocab from "../features/vocab/AddVocab/AddVocab";
import VocabList from "../features/vocab/VocabList/VocabList";
import Header from "../common/Header/Header";
import theme from "./theme";
import styles from "./App.module.scss";

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
      <main className={styles.container}>{routes}</main>
    </ThemeProvider>
  );
};

export default App;
