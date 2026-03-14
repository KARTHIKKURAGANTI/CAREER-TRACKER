import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/dashboard/Profile";
import DashboardHome from "./pages/dashboard/DashBoardHome";
import Analytics from "./pages/dashboard/Analytics";
import Integrations from "./pages/dashboard/Integrations"
import Settings from "./pages/dashboard/Settings";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>

      {/* Dashboard pages */}
                  <Route
                    path="/dashboardHome"
                    element={
                      <ProtectedRoute>
                        <DashboardHome/>
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/analytics"
                    element={
                      <ProtectedRoute>
                        <Analytics/>
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile/>
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/integrations"
                    element={
                      <ProtectedRoute>
                        <Integrations/>
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/settings"
                    element={
                      <ProtectedRoute>
                        <Settings/>
                      </ProtectedRoute>
                    }
                  />

    </Routes>
  );
}

export default App;









