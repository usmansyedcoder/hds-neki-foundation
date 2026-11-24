import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ManagePrograms from "./pages/admin/ManagePrograms";
import ManageNews from "./pages/admin/ManageNews";
import ManageDonations from "./pages/admin/ManageDonations";
import ManageContacts from "./pages/admin/ManageContacts";
import ManageVolunteers from "./pages/admin/ManageVolunteers";

function AdminLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="min-h-[70vh] bg-slate-50">{children}</div>
    </ProtectedRoute>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <main className="min-h-[60vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/programs"
              element={
                <AdminLayout>
                  <ManagePrograms />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/news"
              element={
                <AdminLayout>
                  <ManageNews />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/donations"
              element={
                <AdminLayout>
                  <ManageDonations />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/contacts"
              element={
                <AdminLayout>
                  <ManageContacts />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/volunteers"
              element={
                <AdminLayout>
                  <ManageVolunteers />
                </AdminLayout>
              }
            />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </AuthProvider>
  );
}
