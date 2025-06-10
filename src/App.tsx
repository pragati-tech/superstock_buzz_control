
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";
import TanishqPage from "./pages/TanishqPage";
import TitanPage from "./pages/TitanPage";
import MiaPage from "./pages/MiaPage";
import FastrackPage from "./pages/FastrackPage";
import SonataPage from "./pages/SonataPage";
import SkinnPage from "./pages/SkinnPage";
import ProductCatalog from "./pages/ProductCatalog";
import TanishqBridal from "./pages/TanishqBridal";
import TanishqDiamonds from "./pages/TanishqDiamonds";
import TitanEdge from "./pages/TitanEdge";
import TitanRaga from "./pages/TitanRaga";
import MiaHandbags from "./pages/MiaHandbags";
import FastrackWatches from "./pages/FastrackWatches";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/product-catalog" element={<ProductCatalog />} />
          <Route path="/brands/tanishq" element={<TanishqPage />} />
          <Route path="/brands/tanishq/bridal" element={<TanishqBridal />} />
          <Route path="/brands/tanishq/diamonds" element={<TanishqDiamonds />} />
          <Route path="/brands/titan" element={<TitanPage />} />
          <Route path="/brands/titan/edge" element={<TitanEdge />} />
          <Route path="/brands/titan/raga" element={<TitanRaga />} />
          <Route path="/brands/mia" element={<MiaPage />} />
          <Route path="/brands/mia/handbags" element={<MiaHandbags />} />
          <Route path="/brands/fastrack" element={<FastrackPage />} />
          <Route path="/brands/fastrack/watches" element={<FastrackWatches />} />
          <Route path="/brands/sonata" element={<SonataPage />} />
          <Route path="/brands/skinn" element={<SkinnPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
