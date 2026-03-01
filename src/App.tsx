import Header from "./components/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/Footer";
import { useState } from "react";
import ErrorContext from "./lib/contexts/ErrorContext";
import { UserContext } from "./lib/contexts/UserContext";
import type { UserType } from "./lib/types";

function App() {
  const [globalError, setGlobalError] = useState<Error>();
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <ErrorContext value={{ globalError, setGlobalError }}>
      <UserContext value={{ user, setUser }}>
        <Header />
        <Layout />
        <Footer />
      </UserContext>
    </ErrorContext>
  );
}

export default App;
