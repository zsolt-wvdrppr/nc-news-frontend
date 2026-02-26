import Header from "./components/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/Footer";
import { useState } from "react";
import ErrorContext from "./lib/contexts/ErrorContext";

function App() {
  const [globalError, setGlobalError] = useState<Error>();

  return (
    <ErrorContext value={{ globalError, setGlobalError }}>
      <Header />
      <Layout />
      <Footer />
    </ErrorContext>
  );
}

export default App;
