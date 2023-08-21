import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/home/home";
import Navbar from "./components/commons/navbar";
import { Toaster } from "./components/ui/toaster";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Faq from "./pages/faq/Faq";
import NotFound from "./pages/notfound/NotFound";
import CalendarPicker from "./pages/calendar/picker";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <div className="flex px-5 py-10 w-full lg:w-1/2 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar/update" element={<CalendarPicker />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />

            {/* <Route path="/waitlist" element={<Waitlist />} /> */}
          </Routes>
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
