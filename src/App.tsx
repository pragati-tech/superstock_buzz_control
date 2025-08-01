
import { Toaster } from "@/components/ui/toaster";
import { useState, useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "@/components/ScrollToTop"; 
import Loader from "@/components/loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TitanPage from "./pages/TitanPage";
import MiaPage from "./pages/MiaPage";
import FastrackPage from "./pages/FastrackPage";
import SonataPage from "./pages/SonataPage"; 
import NestlePage from "./pages/NestlePage";
import ReoPage from "./pages/ReoPage";
import HavellsPage from "./pages/HavellsPage";
import NestleProferPage from "./pages/NestleProferPage";
import PolycabPage from "./pages/Polycab";
import TitanWorldPage from "./pages/TitanWorldPage";
import HeliosPage from "./pages/HeliosPage";
import FastrackStorePage from "./pages/FastrackStorePage";
import NescafeKiosksPage from "./pages/NescafeKiosksPage";

const queryClient = new QueryClient();



const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/brands/titan" element={<TitanPage />} />
          <Route path="/brands/mia" element={<MiaPage />} />
          <Route path="/brands/fastrack" element={<FastrackPage />} />
          <Route path="/brands/sonata" element={<SonataPage />} />
          <Route path="/brands/nestle" element={<NestlePage />} />
          <Route path="/brands/reo" element={<ReoPage />} />
          <Route path="/brands/havells" element={<HavellsPage />} />
          <Route path="/brands/nestle-profer" element={<NestleProferPage />} />
          <Route path="/brands/Polycab" element={<PolycabPage />} />
          <Route path="/brands/titan-world" element={<TitanWorldPage />} />
          <Route path="/brands/helios" element={<HeliosPage />} />
          <Route path="/brands/fastrack-store" element={<FastrackStorePage />} />
          <Route path="/brands/nescafe-kiosks" element={<NescafeKiosksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);  

export default App;
