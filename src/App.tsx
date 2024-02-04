import React from "react";
import MainContent from "./components/MainContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
