import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import Index from "./pages/Index";
import Clients from "./pages/Clients";
import Cases from "./pages/Cases";
import Documents from "./pages/Documents";
import Templates from "./pages/Templates";
import CalendarPage from "./pages/CalendarPage";
import Invoices from "./pages/Invoices";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Index /></MainLayout>} />
          <Route path="/clients" element={<MainLayout><Clients /></MainLayout>} />
          <Route path="/cases" element={<MainLayout><Cases /></MainLayout>} />
          <Route path="/documents" element={<MainLayout><Documents /></MainLayout>} />
          <Route path="/templates" element={<MainLayout><Templates /></MainLayout>} />
          <Route path="/calendar" element={<MainLayout><CalendarPage /></MainLayout>} />
          <Route path="/invoices" element={<MainLayout><Invoices /></MainLayout>} />
          <Route path="/reports" element={<MainLayout><Reports /></MainLayout>} />
          <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
