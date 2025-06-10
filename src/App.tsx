
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import TanishqPage from "./pages/TanishqPage";
import TitanPage from "./pages/TitanPage";
import MiaPage from "./pages/MiaPage";
import FastrackPage from "./pages/FastrackPage";
import SonataPage from "./pages/SonataPage";
import SkinnPage from "./pages/SkinnPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/brands/tanishq" element={<TanishqPage />} />
          <Route path="/brands/titan" element={<TitanPage />} />
          <Route path="/brands/mia" element={<MiaPage />} />
          <Route path="/brands/fastrack" element={<FastrackPage />} />
          <Route path="/brands/sonata" element={<SonataPage />} />
          <Route path="/brands/skinn" element={<SkinnPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
