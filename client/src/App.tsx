import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ProductsPage from "@/pages/ProductsPage";
import CategoriesPage from "@/pages/CategoriesPage";
import ACEngineCoolingPage from "@/pages/ACEngineCoolingPage";
import ACProductDetailPage from "@/pages/ACProductDetailPage";
import DieselComponentsPage from "@/pages/DieselComponentsPage";
import EngineManagementPage from "@/pages/EngineManagementPage";
import FiltrationPage from "@/pages/FiltrationPage";
import IgnitionPage from "@/pages/IgnitionPage";
import RotatingElectricsPage from "@/pages/RotatingElectricsPage";
import WiperBladesPage from "@/pages/WiperBladesPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/categories" component={CategoriesPage} />
      <Route path="/categories/ac-engine-cooling" component={ACEngineCoolingPage} />
      <Route path="/categories/ac-engine-cooling/:slug" component={ACProductDetailPage} />
      <Route path="/categories/diesel-components" component={DieselComponentsPage} />
      <Route path="/categories/engine-management" component={EngineManagementPage} />
      <Route path="/categories/filtration" component={FiltrationPage} />
      <Route path="/categories/ignition" component={IgnitionPage} />
      <Route path="/categories/rotating-electrics" component={RotatingElectricsPage} />
      <Route path="/categories/wiper-blades" component={WiperBladesPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
