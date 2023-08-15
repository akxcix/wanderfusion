import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/home/home";
import Waitlist from "./pages/waitlist/waitlist";
import Navbar from "./components/commons/navbar";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <div className="flex px-5 py-10 w-full lg:w-1/2 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
