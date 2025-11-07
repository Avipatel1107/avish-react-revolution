import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactPage from "./components/ContactPage";
import AboutUs from "./pages/AboutUs";
import LogisticsPage from "./pages/LogisticsPage";
import AnimalHealth from "./pages/AnimalHealth";
import Pharmaceuticals from "./pages/Pharmaceuticals";
import LaneStudy from "./pages/LaneStudy";
import Validation from "./pages/Validation";
import Products from "./pages/Products";

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/logistics" element={<LogisticsPage />} />
          <Route path="/animal-health" element={<AnimalHealth />} />
          <Route path="/pharmaceuticals" element={<Pharmaceuticals />} />
          <Route path="/lane-study" element={<LaneStudy />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/products" element={<Products />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
