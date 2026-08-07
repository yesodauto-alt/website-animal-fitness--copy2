/* Main App Component - Handles routing (using react-router-dom), query client and other providers - use this file to add all routes */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from '@/hooks/use-auth'
import { ConversionFlowProvider } from '@/contexts/conversion-flow'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import MusculacaoPage from './pages/MusculacaoPage'
import CrossPage from './pages/CrossPage'
import CoachesPage from './pages/CoachesPage'
import PlanosPage from './pages/PlanosPage'
import SobrePage from './pages/SobrePage'
import UnitPage from './pages/UnitPage'
import Layout from './components/Layout'

// ONLY IMPORT AND RENDER WORKING PAGES, NEVER ADD PLACEHOLDER COMPONENTS OR PAGES IN THIS FILE
// AVOID REMOVING ANY CONTEXT PROVIDERS FROM THIS FILE (e.g. TooltipProvider, Toaster, Sonner)

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <TooltipProvider>
        <ConversionFlowProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/musculacao" element={<MusculacaoPage />} />
              <Route path="/cross" element={<CrossPage />} />
              <Route path="/coaches" element={<CoachesPage />} />
              <Route path="/planos" element={<PlanosPage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/unidades/:slug" element={<UnitPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ConversionFlowProvider>
      </TooltipProvider>
    </AuthProvider>
  </BrowserRouter>
)
export default App
