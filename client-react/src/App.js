import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import { JobDescriptionPage } from "./pages/JobDescriptionPage";
import AboutUsPage from "./pages/AboutUsPage";
import ResourcesPage from "./pages/ResourcesPage";
import FaqPage from "./pages/FaqPage";

import UserContextProvider from "./Store/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/job" element={<JobDescriptionPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/faq" element={<FaqPage />} />

       
        </Routes>
      </Layout>
    </UserContextProvider>
  );
}

export default App;
