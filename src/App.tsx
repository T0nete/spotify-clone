import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import SearchPage from "./components/SearchPage";
import PlaylistPage from "./components/PlayListPage";
import SupabaseProvider from "./providers/SupabaseProvider";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SupabaseProvider>
        <Layout>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />
          </Routes>
        </Layout>
      </SupabaseProvider>
    </BrowserRouter>
  );
};

export default App;
