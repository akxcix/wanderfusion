import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/home/home";
import Navbar from "./components/commons/navbar";
import { Toaster } from "./components/ui/toaster";
import Login from "./pages/login/Login";
import Faq from "./pages/faq/Faq";
import NotFound from "./pages/notfound/NotFound";
import CalendarPicker from "./pages/calendar/picker";
import Dashboard from "./pages/dashboard/Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { OAUTH_GOOGLE_CLIENT_ID } from "./common/constants";

function App() {
  return (
    <GoogleOAuthProvider clientId={OAUTH_GOOGLE_CLIENT_ID}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Navbar />
          <div className="flex px-5 py-10 w-full lg:w-1/2 mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calendar/update" element={<CalendarPicker />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Toaster />
        </Router>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
