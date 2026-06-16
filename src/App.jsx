import { useState } from "react";

import GlobalStyle from "./global";
import RoutesApp from "./routes/routes.jsx";
import { AuthProvider } from "./context/Auth.jsx";

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
