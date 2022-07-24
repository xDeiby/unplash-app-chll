import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layouts";

import routes from "./routes.conf";

export default function RoutesLayout() {
  return (
    // All routes
    <Routes>
      {routes.map(({ path, name, auth, page: Page }) => (
        <Route
          key={name}
          path={path}
          element={
            auth ? (
              <AuthLayout>
                <Page />
              </AuthLayout>
            ) : (
              <Page />
            )
          }
        />
      ))}

      {/* Main  */}
      <Route
        path="/*"
        element={<Navigate to={routes.find((route) => route.default).to} />}
      />
    </Routes>
  );
}
