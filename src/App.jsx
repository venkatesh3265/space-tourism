import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
