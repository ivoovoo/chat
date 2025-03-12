import React from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "../../config/routerConfig";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routerConfig.map(({ element, path }) => (
          <Route element={element} path={path} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
