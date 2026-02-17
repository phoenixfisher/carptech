import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tutorials from "./pages/Tutorials";
import LessonDetail from "./pages/LessonDetail";
import LessonComplete from "./pages/LessonComplete";
import CheatSheet from "./pages/CheatSheet";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/lesson/:id" element={<LessonDetail />} />
          <Route path="/lesson/:id/complete" element={<LessonComplete />} />
          <Route path="/cheat-sheet" element={<CheatSheet />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
